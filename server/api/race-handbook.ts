export default defineEventHandler(async (event) => {
  try {
    // Fetch directly from your Google Doc export endpoint
    const docUrl = 'https://docs.google.com/document/d/1el0DZ6BCFoloQ3pf5BMls5O1ARnVFR5vKuout7k-86k/export?format=md'
    const response = await fetch(docUrl)
    let markdownText = await response.text()

    // Optional: Clean up any unwanted Google Docs artifacts or format headings as standard Markdown if needed
    // e.g., Ensuring headers use standard markdown '#' syntax if exported as plain text

    return {
      success: true,
      content: markdownText,
      updatedAt: new Date().toISOString()
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch live Google Doc markdown content.'
    })
  }
})