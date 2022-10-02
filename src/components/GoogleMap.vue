<template>
    <div class="google-map-area section" id="support">
        <GoogleMap api-key="AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws" style="width: 100%; height: 500px" :center="center" :zoom="14">
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>

<script>
    import { GoogleMap, Marker } from "vue3-google-map";

    export default ({
        components: { 
            GoogleMap, 
            Marker 
        },
        setup() {
            const center = { lat:52.482900, lng:-1.893460 };
            return { center };
        },
    });
</script>

