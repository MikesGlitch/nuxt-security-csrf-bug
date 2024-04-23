<template>
  <div>
    <button @click.prevent="submitApplicationForm(false)">
      Failing Submit
    </button>
    <button @click.prevent="submitApplicationForm(true)">
      Successful Submit
    </button>
    <p>The csrf: {{ csrf }}</p>
    <p>Status: {{ status }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const buttonLoading = ref(false);
const status = ref();
const { csrf } = useCsrf();

const submitApplicationForm = async (withHeader: boolean) => {
  buttonLoading.value = true;

  const applicationData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@jodoe.com',
    jobId: '1234',
    jobTitle: 'Software Engineer',
  };
  

  try {
    const { data, error } = await useFetch('/api/application', {
      method: 'post',
      body: JSON.stringify(applicationData),
      headers: withHeader ? {
        'csrf-token': csrf
      } : undefined
    })

    if (error.value) {
      status.value = 'Failed - ' + error.value?.message;
      return;
    }

    status.value = 'Success';
  } catch (error) {
    status.value = 'Failed';
  } finally {
    buttonLoading.value = false;
  }
};
</script>
