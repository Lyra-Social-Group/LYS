export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser()
  const client = useSupabaseClient()

  if (!user.value?.id) {
    console.log("Middleware: No user found, redirecting to login.")
    return navigateTo('/accounts/login')
  }

  const { data: profile, error } = await client
    .from('profiles')
    .select('role')
    .eq('id', user.value.id)
    .maybeSingle()

  console.log("Middleware Profile Check:", { userId: user.value.id, profile, error })

  const allowedRoles = ['ceo', 'developer', 'hr']
  if (!profile || !allowedRoles.includes(profile.role?.toLowerCase().trim())) {
    console.log("Middleware: Access denied. Role not allowed:", profile?.role)
    return navigateTo('/accounts')
  }
  
  console.log("Middleware: Access granted!")
})