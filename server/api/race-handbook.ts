export default defineEventHandler(async (event) => {
  try {
    const docUrl = 'https://docs.google.com/document/d/1el0DZ6BCFoloQ3pf5BMls5O1ARnVFR5vKuout7k-86k/export?format=html'
    const response = await fetch(docUrl)
    let htmlContent = await response.text()

    // 1. Remove hardcoded print page width constraints (e.g., max-width: 468pt or width limits in .c0 / body)
    htmlContent = htmlContent
      .replace(/max-width\s*:\s*[^;}"']+/gi, 'max-width: 100%')
      .replace(/width\s*:\s*\d+pt/gi, 'width: 100%')
      .replace(/margin-right\s*:\s*[^;}"']+/gi, 'margin-right: 0')

    return {
      success: true,
      content: htmlContent,
      updatedAt: new Date().toISOString()
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch live Google Doc content.'
    })
  }
})