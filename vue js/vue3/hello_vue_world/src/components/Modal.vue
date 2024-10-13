<template>
    <div class="modals">
        <div class="backdrop" @click.self="closeModal">
            <div class="modal" :class="{sale: theme === 'sale'  }" >
                <h3>{{ heading }}</h3>
                <p>{{ text }}</p>
                <slot></slot>
                <div class="actions">
                    <slot name="links"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: ['heading', 'text', 'theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
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

.modal button {
    width: 100%;
    padding: 8px;
}

.modal .actions{
    text-align: center;
    color: #333;
    margin-top: 20px;
    max-width: 30px 0 10px 0;
}

.modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
}
</style>