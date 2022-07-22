<template>
  <div class="nan">
    <form action="">
      <div class="item" v-for="(item, label, index) in format" :key="index">
        <label :for="label">{{label}}</label>
        <input v-if="item.type === 'string'" type="text" :placeholder="`Enter ${label}`">
        <input v-if="item.type === 'media'" type="file" :placeholder="`Enter ${label}`">
        <!-- <textarea v-if="item.type === 'richtext'" :placeholder="`Enter ${label}`"></textarea> -->
        <tinymce v-if="item.type === 'richtext'" id="d1"></tinymce>
        <i class="uil uil-asterisk" v-if="item.required === true" style="color: red; font-size: 0.6em;"></i>
      </div>
    </form>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';

import TestimonialType from '~/form/TestimonialType';
import Testimonial from '~/entity/Testimonial';

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      form: {
        id: 8,
        createdAt: '123',
        publishedAt: '123',
        updatedAt: '123',
        username: '123',
        jobtitle: 'dev',
        message: 'coucou msg',
        userImage: 'img',
        companyLogo: 'company img',
      },
      format: {},
    };
  },
  mounted() {
    let t = new Testimonial(this.form);
      t.setId(1);
    console.log(t, TestimonialType);
    this.format = TestimonialType['attributes'];
  }
})
</script>
