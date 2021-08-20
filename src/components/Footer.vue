<template>
    <footer>
        <p>Copyright &copy; 2021</p>
        <router-link to="/about">About</router-link>
        <div id="testingLink">
            <router-link to="/testing">Testing</router-link>
        </div>
    </footer>
</template>

<style scoped>
a {
    color: #333
}

footer {
    margin-top: 30px;
    text-align: center;
}

#id {
    position: fixed;
    bottom: 0;
}
</style>