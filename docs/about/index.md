


<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '../assets/eraserhead.png',
    name: 'Terry Mount',
    title: 'Williamsburg Site Manager',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },


  {
    avatar: '../assets/elon.jfif',
    name: 'Elon',
    title: 'Assistant to the Manager',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },



]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />