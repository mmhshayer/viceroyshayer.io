<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-0">
    <div class="grid place-items-center">
      <div class="flex items-center min-h-auto">
        <div class="p-5 px-14 mx-auto max-w-md rounded-md shadow-sm secondary-bg-color">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold">Contact Me</h1>
            <p>Send me a message here or find me @</p>
          </div>
          <div class="flex flex-wrap justify-center space-x-2">
            <a href="mailto:mustakim13579@mail.com"><img src="~assets/icons/socials/gmail.svg" class="w-6 h-6" /></a>
            <a href="https://github.com/viceroyshayer"><img src="~assets/icons/socials/github.svg" class="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/viceroyshayer/"><img src="~assets/icons/socials/linkedin.svg" class="w-6 h-6" /></a>
            <a href="https://www.hackerrank.com/about-us"><img src="~assets/icons/socials/wechat.svg" class="w-6 h-6" /></a>
          </div>
      </div>
    </div>
    </div>
    <div class="grid place-items-center">
      <div class="flex items-center min-h-screen">
        <div class="container mx-auto">
          <div class="max-w-md mx-auto p-5 rounded-md shadow-sm secondary-bg-color">
            <div class="text-center">
              <h1 class="my-3 text-3xl font-semibold">Message</h1>
            </div>
            <div class="m-7">
              <form action="https://formspree.io/f/xdoyaleq" method="POST" id="form">

                <div class="mb-6">
                  <label for="name" class="block mb-2 text-sm ">Full Name</label>
                  <input type="text" name="name" id="name" placeholder="John Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div class="mb-6">
                  <label for="email" class="block mb-2 text-sm  ">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div class="mb-6">

                  <label for="phone" class="text-sm ">Phone Number</label>
                  <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div class="mb-6">
                  <label for="message" class="block mb-2 text-sm">Your Message</label>

                  <textarea rows="5" name="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                </div>
                <div class="mb-6">
                  <button type="submit" class="w-full px-3 py-4 bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Send Message</button>
                </div>
                  <p class="text-base text-center" id="result">
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'page',
  }
</script>

<style scoped>
</style>
