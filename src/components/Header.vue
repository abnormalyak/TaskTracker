<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @btn-click="$emit('toggle-add-task')" 
        :text="addTaskVisible ? 'Close' : 'Add Task'" 
        :color="addTaskVisible ? 'red' : 'green'"
        v-show="homePage" />
    </header>
</template>

<script>
import Button from './Button'

export default {

    name: 'Header',
    props: {
        title: String,
        addTaskVisible: Boolean
    },
    components: {
        Button,
    },
    computed: { // Computed properties
        homePage() {
            return this.$route.path === '/'
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>