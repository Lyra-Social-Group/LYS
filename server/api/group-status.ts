// server/api/group-status.ts
export default defineEventHandler(async (event) => {
  const authCookie = process.env.VRCHAT_AUTH_COOKIE
  const groupId = 'grp_e8333552-33fd-47be-846b-97648545eb3c'

  try {
    const response = await $fetch(`https://api.vrchat.cloud/api/1/groups/${groupId}/instances`, {
      headers: {
        'Cookie': `auth=${authCookie}`,
        'User-Agent': 'LYSBOT (lyra@lyrasocialgroup.tech)'
      }
    })
// 👀 ADD THIS LINE TO SEE WHAT VRCING IS RETURNING
    console.log("RAW VRChat API Response:", JSON.stringify(response, null, 2))
    
    return response
  } catch (err: any) {
    console.error("VRChat API Error Response:", err?.data || err?.message)
    return { error: err?.message || 'Unknown error', instances: [] }
  }
  })