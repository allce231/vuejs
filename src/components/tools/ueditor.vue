<template>
<div>
    <Uediter :value="ueditor.value" :config="ueditor.config" ref="ue"></Uediter>
    <div class="" style="text-algin:left">
        <el-button type="primary" @click="returnContent">显示编辑器内容</el-button>
        <div>{{dat.content}}</div>
    </div>
</div>
</template>

<script>
import Uediter from '@/components/ueditor.vue';

export default {
    data () {
        return {
            dat: {
                content: ''
            },
            ueditor: {
                value: '编辑器默认文字',
                config: {
                    initialFrameWidth: '100%',
                    initialFrameHeight: 320
                }
            }
        }
    },
    methods: {
        returnContent () {
            this.dat.content = this.$refs.ue.getUEContent()
        }
    },
    components: {
        Uediter
    },
}
</script>

<style>

</style>`
