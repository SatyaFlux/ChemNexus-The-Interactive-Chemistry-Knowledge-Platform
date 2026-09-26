// api/assistant.js
// Vercel Serverless Function for ChemNexus AI Assistant
// Secure server-side processing: Never exposes GEMINI_API_KEY to frontend client code

export default async function handler(req, res) {
  // Set CORS headers for Vercel deployment
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  const { message, history } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: 'Message is required in request body.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    // Graceful response informing client to use local chemistry knowledge engine
    return res.status(200).json({
      configured: false,
      reply: null,
      message: 'Server AI API key not configured in environment variables. Falling back to local chemistry engine.'
    });
  }

  try {
    // Call Google Gemini API securely with server-side key
    const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const systemPrompt = `You are the ChemNexus AI Chemistry Assistant, an expert chemistry educator.
Provide scientifically precise, clear, and engaging explanations.
Format chemical formulas clearly (e.g. H2O, Fe2O3, [Ar] 3d6 4s2).
Focus on inorganic, organic, physical, and analytical chemistry. Keep answers concise and educational.`;

    const contents = [
      {
        role: 'user',
        parts: [{ text: `${systemPrompt}\n\nStudent question: ${message}` }]
      }
    ];

    const response = await fetch(geminiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        generationConfig: {
          maxOutputTokens: 800,
          temperature: 0.4
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error:', errorText);
      return res.status(200).json({
        configured: false,
        reply: null,
        error: 'Upstream AI provider error'
      });
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    return res.status(200).json({
      configured: true,
      reply: candidateText || 'I could not synthesize a chemistry response. Please try rephrasing.'
    });
  } catch (err) {
    console.error('AI Serverless Handler Exception:', err);
    return res.status(200).json({
      configured: false,
      reply: null,
      error: 'Exception during AI processing'
    });
  }
}

