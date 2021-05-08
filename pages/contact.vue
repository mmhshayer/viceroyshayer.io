<template>
  <body>
    <section class="min-h-screen flex items-stretch text-white ">
        <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);">
            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div class="w-full px-24 z-10 flex space-x-24">
              <a href="https://github.com/viceroyshayer"><img src="~assets/icons/socials/github.svg" class="w-24"/></a>
              <a href="https://www.linkedin.com/in/viceroyshayer/"><img src="~assets/icons/socials/linkedin.svg" class="w-24"/></a>
              <a href="https://www.linkedin.com/in/viceroyshayer/"><img src="~assets/icons/socials/wechat.svg" class="w-24"/></a>
            </div>
            <div class="bottom-4 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
              <a href="https://www.facebook.com/theviceroyshayer/"><img src="~assets/icons/socials/facebook.svg" class="w-10 h-10"/></a>
              <a href="https://www.instagram.com/viceroyshayer/"><img src="~assets/icons/socials/instagram.svg" class="w-10 h-10"/></a>
              <a href="https://twitter.com/viceroyshayer"><img src="~assets/icons/socials/twitter.svg" class="w-10 h-10"/></a>
            </div>
        </div>
        <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style="background-color: #161616;">
            <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);">
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div class="w-full py-6 z-20">
                <h1 class="my-3 text-7xl font-semibold">
                  Contact
                </h1>
                <a href="mailto:mustakim13579@mail.com">mustakim13579@gmail.com</a>
                <h2 class="text-gray-100 text-2xl">
                  or
                </h2>
                <form action="https://formspree.io/f/xdoyaleq" method="POST" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                  <div class="mb-3">
                    <label for="name" class="block mb-2 text-sm">Full Name</label>
                    <input type="text" name="name" id="name" placeholder="John Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="block mb-2 text-sm">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                  </div>
                  <div class="mb-3">

                    <label for="phone" class="block mb-2 text-sm">Phone Number</label>
                    <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                  </div>
                  <div class="mb-3">
                    <label for="message" class="block mb-2 text-sm">Your Message</label>

                    <textarea rows="5" name="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                  </div>
                  <div class="mb-3">
                    <button type="submit" class="w-full px-3 py-4 bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Send Message</button>
                  </div>
                    <p class="text-base text-center" id="result">
                  </p>
                  <div class="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-12 lg:hidden ">
                    <a href="https://github.com/viceroyshayer"><img src="~assets/icons/socials/github.svg" class="w-10 h-10"/></a>
                    <a href="https://www.linkedin.com/in/viceroyshayer/"><img src="~assets/icons/socials/linkedin.svg" class="w-10 h-10"/></a>
                    <a href="https://www.linkedin.com/in/viceroyshayer/"><img src="~assets/icons/socials/wechat.svg" class="w-10 h-10"/></a>
                  </div>
                </form>
            </div>
        </div>
    </section>
</body>
</template>

<script>
  export default {
    layout: 'page'
  }
</script>

<style scoped>
</style>
