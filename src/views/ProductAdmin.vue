<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="position-sticky pt-3">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/productadmin/products">
                                Products
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/productadmin/products/create">
                                Add Products
                            </router-link>
                        </li>

                    </ul>
                </div>
            </nav>
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
               
                <!-- all product show here -->
                <router-view />
            </main>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {

    }
}
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgb(0 0 0 / 10%);
}
</style>
