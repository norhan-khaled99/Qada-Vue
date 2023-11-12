<template>
  <div class="container m-auto">
    <div class="row justify-content-center text-center">
      <div class="col-md-8 col-sm-12 mt-5">
        <form @submit.prevent="addComment">
          <input
            type="text"
            v-model="form.comment"
            class="form-control"
            placeholder=""
          />
          <button class="btn add-comment btn-secondary my-3" type="submit">
            اضف تعليق
          </button>
        </form>
      </div>
      <!-- end add comment -->

      <!-- display the comment depend on project id  -->
        <!-- <div class="col-md-8 col-sm-12 mt-5">
          <div v-for="comment in comments" :key="comment.id" class="d-flex my-3">
            <div class="avatar">
              <img src="../../../../assets/ahmedmohsen1.png" alt="" />
            </div>
            <div class="card py-2 px-3">
              <div class="card-body-title">شركة المهندسين المحدودة</div>
              <div class="sub-title my-2">{{ comment.comment }}</div>
            </div>
          </div>
        </div> -->

        <div v-if="comments.length > 0">
          <div v-for="comment in comments" :key="comment.id" class="d-flex my-3 bg-dark">
            <!-- ... -->
            <div class="sub-title my-2">{{ comment.comment }}</div>
          </div>
        </div>
        <div v-else>
          No comments available.
        </div>
        

        <!-- <div class="additional-texts my-1 me-5">
          <span class="text">19m</span>
          <span class="text">رد</span>
        </div> -->
      </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import globalService from "../../../../services/globalservice";
import { useRoute } from "vue-router";
import engineerofficesService from "../../services/engineeroffice";
export default {
  setup() {
    const route = useRoute();
    const project_id = route.params.id;
    const user_id = localStorage.getItem("id");
    const comments = ref([]);

    const form = ref({
      project_id: "",
      comment: "",
    });

    const addComment = () => {
      form.value.project_id = project_id;
      form.value.user_id = user_id;

      console.log(form.value);
      engineerofficesService
        .addComment(form.value)
        .then((res) => {
          console.log(res.data);
          getAllComments();
        })
        .catch((error) => {
          console.error(error);
        });
    };

    // const getAllComments = () => {
    //   globalService
    //     .getAllProjectForlandingpage()
    //     .then((res) => {
    //       const project = res.data.data.find(
    //         (project) => project.id === project_id
    //       );
    //       if (project) {
    //         comments.value = project.comments;
    //         console.log(comments.value);
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // };


// 

// const getAllComments = () => {
//   globalService.getAllProjectForlandingpage()
//     .then((res) => {
//       console.log("API Response:", res.data); // Log the entire API response
//       const extractedComments = res.data.data.flatMap(project => project.comments);
//       console.log("Extracted Comments:", extractedComments); // Log the extracted comments
//       comments.value = extractedComments; // Update the ref with comments
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

const getAllComments = () => {
  globalService.getAllProjectForlandingpage()
    .then((res) => {
      console.log("API Response:", res.data); // Log the entire API response
      const project = res.data.data.find((project) => project.id === project_id);
      console.log("Requested Project ID:", project_id); // Log the requested project ID
      if (project) {
        const projectComments = project.comments;
        console.log("Project Comments:", projectComments); // Log the comments for the specific project
        comments.value = projectComments;
        // Update the ref with comments for the specific project
      } else {
        comments.value = [];
        // Set comments ref to an empty array if the project is not found
      }
    })
    .catch((error) => {
      console.error(error);
    });
};




    onMounted(() => {
      getAllComments();
    });

    return {
      form,
      addComment,
      comments,
      project_id,
    };
  },
};
</script>

<style scoped>
* {
  direction: rtl;
}
.add-comment {
  border: none;
}
.card {
  border-radius: 14px;
  border: 1px solid #48847b;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
}
.card-body-title {
  color: #4b4b4b;
  text-align: right;
  font-family: Cairo;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 105% */
}

.sub-title {
  color: #000;
  text-align: right;
  font-family: Cairo;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 123.529% */
}
.additional-texts {
  color: #484848;
  text-align: right;
  font-family: Cairo;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 131.25% */
}
.additional-texts span {
  margin-left: 2.25rem;
}
.avatar {
  border-radius: 40px;
  margin-left: 0.5rem;
}
.sub-title-reply {
  color: #000;
  text-align: right;
  font-family: Cairo;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 123.529% */
}
.contract-text {
  color: #0043a8;
  text-align: right;
  font-family: Cairo;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px; /* 150% */
}
.contract-text svg {
  margin-left: 10px;
}
</style>
