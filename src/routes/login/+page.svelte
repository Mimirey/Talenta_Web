<script>
  import LoginForm from '$lib/components/LoginForm.svelte';
  import {goto} from '$app/navigation';
  import { enhance } from '$app/forms';

  export let form;
  $: if (form?.success && form?.redirect) {
      goto(form.redirect);
    }
</script>

<div class="login-page">
  <img src="/images/logo.png" alt="logo" class="logo">

  <h1>Talenta Orang Tua</h1>
  <div class="login-content">
    
    <h2>Selamat Datang</h2>
    <p>Semangat buat hari ini ya..</p>
      <LoginForm {form} enhance={enhance}/>
  </div>
</div>

