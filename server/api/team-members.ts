import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const method = getMethod(event)

  // Handle fetching team members for the frontend page
  if (method === 'GET') {
    const client = await serverSupabaseClient(event).catch(() => null)
    
    if (!client) {
      throw createError({ statusCode: 500, message: 'Supabase server client initialization failed.' })
    }
    
    // Fetch profiles from Supabase
    const { data, error } = await client
      .from('profiles')
      .select('*')

    if (error) {
      throw createError({ statusCode: 500, message: error.message })
    }

    // Map database columns to match what your frontend template expects
    const formattedMembers = (data || []).map((member: any) => ({
      id: member.id,
      name: member.name || member.display_name || 'Community Member',
      role: member.role || 'Member',
      bio: member.bio || 'Tell the community a bit about yourself...',
      avatarUrl: member.avatar_url || member.avatarUrl || '/logo.png',
      tagline: member.tagline || 'Community Member',
      socialUrl: member.social_url || member.socialUrl || null
    }))

    return formattedMembers
  }

  // Handle submitting a new profile from the join page
  if (method === 'POST') {
    const body = await readBody(event)
    
    return { success: true, message: 'Profile submitted successfully!' }
  }
})