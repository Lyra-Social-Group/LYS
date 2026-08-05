// app/middleware/admin.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser()
  const client = useSupabaseClient()

  if (!user.value) {
    return navigateTo('/accounts/login')
  }

  const { data: profile } = await client
    .from('profiles')
    .select('role')
    .eq('id', user.value.id)
    .single()

  const allowedRoles = ['ceo', 'developer', 'hr']
  if (!profile || !allowedRoles.includes(profile.role?.toLowerCase().trim())) {
    return navigateTo('/accounts')
  }
})