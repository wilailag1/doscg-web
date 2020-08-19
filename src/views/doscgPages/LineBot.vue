<template>
  <div>
    <h1>FindXYZ</h1>
    <div class="alert alert-primary" role="alert">
      <h4 class="alert-heading">How to use!</h4>
      <p>พิมพ์ hi,hello,สวัสดี จะได้คำแนะนำจากไลน์บอท</p>
      <p>linebot สามารถตอยคำถามได้เพียงสามข้อ</p>
      <p>เมื่อตอบไม่ได้ภานใน 10 วิ ไลน์บอทจะแจ้งเตือนว่า</p>
      <p>ไม่สามาถตอบคำถามได้</p>
    </div>
    <div class="row">
      <div class="col-12">
        <img
          :src="src"
          class="img-fluid"
          width="300"
          height="400"
          alt="Responsive image"
        />
      </div>
    </div>

    <!-- <img width="500" height="600" :src="src" /> -->
  </div>
</template>

<script>
import Img from "../../../asset/qrcode.png";
export default {
  data() {
    return {
      src: Img,
    };
  },
};
</script>

<style></style>
