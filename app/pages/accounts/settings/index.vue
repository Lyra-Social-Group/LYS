<template>
  <div class="max-w-3xl mx-auto py-16 px-6">
    <div v-if="loading" class="text-center text-gray-400 py-12">
      Loading your dashboard...
    </div>

    <div v-else class="space-y-8">
      <!-- Dashboard Header -->
      <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center space-x-4">
          <div class="w-20 h-20 rounded-full bg-[#A033ED]/20 border border-[#A033ED]/40 flex items-center justify-center overflow-hidden relative group">
            <img :src="profile.avatar_url || '/logo.png'" alt="Avatar" class="w-full h-full object-cover" />
            <label class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs text-white cursor-pointer transition-opacity">
              Upload
              <input type="file" accept="image/*" @change="uploadAvatar" class="hidden" />
            </label>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-white">{{ profile.display_name || 'Traveler' }}</h1>
            <p class="text-xs text-gray-400">Email: <span class="text-gray-300">{{ userEmail }}</span></p>
            <p class="text-xs text-gray-400 mt-1">Role: <span class="text-purple-400 uppercase font-semibold">{{ profile.role || 'member' }}</span></p>
          </div>
        </div>

        <button 
          @click="handleLogout"
          class="px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer"
        >
          Logout
        </button>
      </div>

      <!-- Edit Profile Info & Social Links -->
      <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border space-y-6">
        <h2 class="text-lg font-bold text-white border-b border-gray-800 pb-4">Profile Settings & Social Links</h2>
        
        <form @submit.prevent="updateProfile" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Display Name</label>
            <input 
              v-model="profile.display_name" 
              type="text" 
              required 
              class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Bio</label>
            <textarea 
              v-model="profile.bio" 
              rows="3"
              placeholder="Tell the community a bit about yourself..." 
              class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm resize-none"
            ></textarea>
          </div>

          <!-- Social Links Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Discord Username</label>
              <input 
                v-model="profile.social_discord" 
                type="text" 
                placeholder="username#0000 or username" 
                class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">YouTube Channel URL</label>
              <input 
                v-model="profile.social_youtube" 
                type="text" 
                placeholder="https://youtube.com/@yourchannel" 
                class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Facebook Profile / Page</label>
              <input 
                v-model="profile.social_facebook" 
                type="text" 
                placeholder="https://facebook.com/yourprofile" 
                class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">X (Twitter) Handle</label>
              <input 
                v-model="profile.social_twitter" 
                type="text" 
                placeholder="@username" 
                class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Twitch Channel</label>
              <input 
                v-model="profile.social_twitch" 
                type="text" 
                placeholder="https://twitch.tv/username" 
                class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">TikTok Profile</label>
              <input 
                v-model="profile.social_tiktok" 
                type="text" 
                placeholder="https://tiktok.com/@username" 
                class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm"
              />
            </div>
          </div>

          <button 
            type="submit" 
            class="px-6 py-2.5 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#A033ED]/30 cursor-pointer mt-4"
          >
            Save Profile
          </button>
        </form>
      </div>

      <!-- Security & Connections -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Change Password -->
        <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border space-y-6">
          <h2 class="text-lg font-bold text-white border-b border-gray-800 pb-4">Change Password</h2>
          
          <form @submit.prevent="updatePassword" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">New Password</label>
              <input 
                v-model="newPassword" 
                type="password" 
                required 
                placeholder="••••••••" 
                class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm"
              />
            </div>

            <button 
              type="submit" 
              class="px-6 py-2.5 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#A033ED]/30 cursor-pointer"
            >
              Update Password
            </button>
          </form>
        </div>

        <!-- Connected Accounts (SSO Providers) -->
        <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border space-y-6 flex flex-col justify-between">
          <div>
            <h2 class="text-lg font-bold text-white border-b border-gray-800 pb-4">Connected Accounts</h2>
            <p class="text-xs text-gray-400 mt-4">Link your social providers for quick authentication.</p>
          </div>

          <div class="space-y-3">
            <button 
              @click="linkProvider('google')"
              class="w-full py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1a1a24] border border-[#A033ED]/40 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Link Google Account</span>
            </button>

            <button 
              @click="linkProvider('discord')"
              class="w-full py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1a1a24] border border-[#A033ED]/40 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Link Discord Account</span>
            </button>

            <button 
              @click="linkProvider('twitter')"
              class="w-full py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1a1a24] border border-[#A033ED]/40 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Link Twitter / X Account</span>
            </button>

            <button 
              @click="linkProvider('twitch')"
              class="w-full py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1a1a24] border border-[#A033ED]/40 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Link Twitch Account</span>
            </button>

            <button 
              @click="linkProvider('spotify')"
              class="w-full py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1a1a24] border border-[#A033ED]/40 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Link Spotify Account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const client = useSupabaseClient()
const loading = ref(true)
const userEmail = ref('')
const newPassword = ref('')

const profile = reactive({
  display_name: '',
  bio: '',
  avatar_url: '',
  role: 'member',
  social_discord: '',
  social_youtube: '',
  social_facebook: '',
  social_twitter: '',
  social_twitch: '',
  social_tiktok: ''
})

// Fetch user data and guard route on mount
onMounted(async () => {
  const { data: { user } } = await client.auth.getUser()
  
  if (!user) {
    return navigateTo('/accounts/login')
  }

  userEmail.value = user.email

  const { data, error } = await client
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (data) {
    profile.display_name = data.display_name || ''
    profile.bio = data.bio || ''
    profile.avatar_url = data.avatar_url || ''
    profile.role = data.role || 'member'
    profile.social_discord = data.social_discord || ''
    profile.social_youtube = data.social_youtube || ''
    profile.social_facebook = data.social_facebook || ''
    profile.social_twitter = data.social_twitter || ''
    profile.social_twitch = data.social_twitch || ''
    profile.social_tiktok = data.social_tiktok || ''
  }

  loading.value = false
})

const updateProfile = async () => {
  const { data: { user } } = await client.auth.getUser()
  if (!user) return

  const { error } = await client
    .from('profiles')
    .upsert({
      id: user.id,
      display_name: profile.display_name,
      bio: profile.bio,
      social_discord: profile.social_discord,
      social_youtube: profile.social_youtube,
      social_facebook: profile.social_facebook,
      social_twitter: profile.social_twitter,
      social_twitch: profile.social_twitch,
      social_tiktok: profile.social_tiktok
    })

  if (error) {
    alert('Error updating profile: ' + error.message)
  } else {
    alert('Profile updated successfully!')
  }
}

const updatePassword = async () => {
  const { error } = await client.auth.updateUser({ password: newPassword.value })
  if (error) {
    alert('Error updating password: ' + error.message)
  } else {
    alert('Password updated successfully!')
    newPassword.value = ''
  }
}

const uploadAvatar = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  const { data: { user } } = await client.auth.getUser()
  if (!user) return

  const fileExt = file.name.split('.').pop()
  const fileName = `${user.id}-${Math.random()}.${fileExt}`
  const filePath = `${fileName}`

  // Upload to Supabase Storage bucket named 'avatars'
  const { error: uploadError } = await client.storage
    .from('avatars')
    .upload(filePath, file)

  if (uploadError) {
    alert('Error uploading avatar: ' + uploadError.message)
    return
  }

  // Get public URL
  const { data: { publicUrl } } = client.storage
    .from('avatars')
    .getPublicUrl(filePath)

  profile.avatar_url = publicUrl

  // Save to profile
  await client
    .from('profiles')
    .upsert({
      id: user.id,
      avatar_url: publicUrl
    })

  alert('Avatar updated!')
}

const linkProvider = async (provider) => {
  const { error } = await client.auth.linkIdentity({ 
    provider: provider,
    options: {
      redirectTo: `${window.location.origin}/accounts/settings`
    }
  })
  if (error) alert(`Error linking ${provider} account: ` + error.message)
}

const handleLogout = async () => {
  await client.auth.signOut()
  navigateTo('/accounts/login')
}
</script>