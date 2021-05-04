<template>
  <div
    class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-10">
        <div class="max-w-md mx-auto">
          <div class="flex flex-wrap overflow-hidden">
            <img
              src="https://snipcart.com/media/205227/tailwind-vue.png"
              class="h-16 sm:h-20 object-scale-down w-1/2 overflow-hidden"
            />
            <img
              src="https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm_400x400.png"
              class="h-16 sm:h-20 object-scale-down w-1/2 overflow-hidden"
            />
          </div>
          <div class="text-center pt-10 font-semibold text-2xl">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>