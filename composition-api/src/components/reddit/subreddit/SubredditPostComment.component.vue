<template>
  <div :class="`r-comment level-${ level }`">
    <div class="r-comment-header">
      <!-- comment header -->
      <span class="label">{{ model.data.author }}</span>
      <span> [level: {{level}} replies: ({{replies.length}}) score: {{ model.data.score }}]</span> 
    </div>
    <div class="r-comment-body">
      <!-- comment body -->
      {{ model.data.body }}
    </div>
    <div class="r-comment-replies" v-if="replies.length > 0">
      <!-- comment replies (recursive) -->
      <span class="label">Replies ({{ replies.length }})</span>
      <!-- recursion with replies -->
      <CommentComponent v-for="(reply, replyIndex) in replies" 
          :key="replyIndex" 
          :level="level+1"
          :model="reply" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { ChildItemInterface } from '@/models/reddit'

  const CommentComponent = defineComponent({
    components: {
    },
    props: {
      model: {
        type: Object as PropType<ChildItemInterface>
      },
      level: {
        type: Number,
        default: 0
      }
    },
    setup(props) {
      const replies = computed(() => {
        const asany : any = props.model?.data.replies
        if (asany && asany.data) {
          return asany.data.children
        }
        return []
      })

      return {
        replies
      }
    }
  })

  // add reference to itself for recursion
  CommentComponent.components = {
    CommentComponent
  }

  export default CommentComponent
</script>

<style lang="scss">
  $border-left-color: #3465ff;

  .r-comment {
    margin: 10px 10px 18px 20px;
    padding-left: 10px;
    border-left: solid 2px $border-left-color;

    @for $i from 1 through 6 {
      &.level-#{$i} {
        $percVal: ($i) * 15%;
        border-left: solid 2px darken($border-left-color, $percVal);
      }
    }

    .label {
      font-weight: bold;
    }

    .r-comment-replies {
      padding-top: 8px;
    }
  }
</style>
