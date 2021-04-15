<template>
  <div class="flex items-center min-h-screen">
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-10 p-5 rounded-md shadow-sm secondary-bg-color">
        <div class="text-center">
          <h1 class="my-3 text-3xl font-semibold">Contact Us</h1>
          <p class="">Fill up the form below to send us a message.</p>
        </div>
        <div class="m-7">
          <form action="https://api.web3forms.com/submit" method="POST" id="form">

            <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE">
            <input type="hidden" name="subject" value="New Submission from Web3Forms">
            <input type="checkbox" name="botcheck" id="" style="display: none;">


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
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
