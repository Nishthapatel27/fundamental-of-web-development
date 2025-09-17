<script>
import ProfileDetails from "./ProfileDetails.svelte";
import ProfileImage from "./ProfileImage.svelte";
</script>

<div>
    <ProfileImage/>
    <ProfileDetails/>
</div>

<div>
    
    <section class="right-panel">
        <h3>details</h3>
        <ul>
            <li>Cool</li>
            <li>Cute</li>
            <li>Nice</li>
        </ul>
    </section>
</div>

<style>
    div{
        border:5px solid #eee;
        box-shadow: 10px 5px 5px gainsboro;
        padding: 1em;
        display:flex;
        gap:1em;
        flex: 1;
        margin: 0em;
        background-color: khaki;

    }
    

    

</style>