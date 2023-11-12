<script lang="ts" setup>
import type { Template } from '~/types/templates'

const { data: templates } = useFetch<Template[]>('/api/templates')

const { copy, isSupported } = useClipboard()

function copyDownloadCommand(template: Template) {
  const command = `npx giget --registry https://raw.githubusercontent.com/barbapapazes/templates/main/templates ${template.name}`
  copy(command)
}
</script>

<template>
  <AppSection class="max-w-screen-xl mx-auto">
    <ol v-if="templates" class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <li v-for="template in templates" :key="template.name">
        <article class="px-12 flex flex-col items-center gap-4">
          <h3 class="font-bold text-xl">
            <NuxtLink :to="template.url" target="_blank" rel="noopener">
              {{ template.name }}
            </NuxtLink>
          </h3>
          <div class="w-full flex items-center justify-center gap-8">
            <NuxtLink :to="`https://stackblitz.com/github/barbapapazes/${template.name}/tree/main`" target="_blank" class="flex flex-row items-center gap-1">
              <span class="i-simple-icons-stackblitz block w-4 h-4" />
              <span>
                Stackblitz
              </span>
            </NuxtLink>
            <NuxtLink :to="`https://codesandbox.io/p/sandbox/github/barbapapazes/${template.name}/tree/main`" target="_blank" class="flex flex-row items-center gap-1">
              <span class="i-simple-icons-codesandbox block w-4 h-4" />
              <span>
                Codesandbox
              </span>
            </NuxtLink>
          </div>
          <div v-if="isSupported">
            <button @click="copyDownloadCommand(template)">
              Copy download command
            </button>
          </div>
        </article>
      </li>
    </ol>
  </AppSection>
</template>
