<template>
    <div class="modals">
        <div class="backdrop">
            <div class="modal" :class="{sale: theme === 'sale'  }" >
                <h3>{{ heading }}</h3>
                <p>{{ text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: ['heading', 'text', 'theme']
}
</script>

<style>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

.modal.sale {
    background-color: crimson;
    color: white;
}
</style>