export default defineEventHandler(async (event) => {
  const folderId = '1LUpfetvPihrcoQzix05PIAy38gglROek'
const apiKey = process.env.GOOGLE_API_KEY

  try {
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${apiKey}&fields=files(id,name)`
    
    const response: any = await $fetch(url)
    
    const photos = response.files.map((file: any) => ({
      id: file.id,
      name: file.name,
      // This tells Google Drive to render the image inline at a clean width size (e.g., width=800)
      url: `https://lh3.googleusercontent.com/d/${file.id}=w800`
    }))

    return photos
  } catch (err: any) {
    console.error('Drive API Error:', err?.message)
    return []
  }
})
