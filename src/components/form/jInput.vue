<template>
    <div>
        <input :placeholder="placeholder" >
    </div>
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                form: {
                    
                }
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>