<script lang="ts">
	import Navbar from "src/components/Navbar.svelte";
	import Card from "src/components/Card.svelte";
	import SearchInput from "src/components/SearchInput.svelte";
</script>

<Navbar/>
<content>
	<SearchInput/>
	<results>
		<Card title={"goulash"} rating={5} tags={["hungarian", "stew", "soup", "meat"]} ratings={520}/>
		<Card title={"goulash"} rating={5} tags={["hungarian", "stew", "soup", "meat"]} ratings={520}/>
		<Card title={"goulash"} rating={5} tags={["hungarian", "stew", "soup", "meat"]} ratings={520}/>
		<Card title={"goulash"} rating={5} tags={["hungarian", "stew", "soup", "meat"]} ratings={520}/>
		<Card title={"goulash"} rating={5} tags={["hungarian", "stew", "soup", "meat"]} ratings={520}/>
		<Card title={"goulash"} rating={5} tags={["hungarian", "stew", "soup", "meat"]} ratings={520}/>
		<Card title={"goulash"} rating={5} tags={["hungarian", "stew", "soup", "meat"]} ratings={520}/>
		<Card title={"goulash"} rating={5} tags={["hungarian", "stew", "soup", "meat"]} ratings={520}/>
		<Card title={"goulash"} rating={5} tags={["hungarian", "stew", "soup", "meat"]} ratings={520}/>
		<Card title={"goulash"} rating={5} tags={["hungarian", "stew", "soup", "meat"]} ratings={520}/>
		<Card title={"goulash"} rating={5} tags={["hungarian", "stew", "soup", "meat"]} ratings={520}/>
		<Card title={"goulash"} rating={5} tags={["hungarian", "stew", "soup", "meat"]} ratings={520}/>
		<Card title={"goulash"} rating={5} tags={["hungarian", "stew", "soup", "meat"]} ratings={520}/>
	</results>
</content>
<footer>
	Made by Carsten
</footer>

<style lang="scss">
	content {
		display: block;
		margin: 1em;;
	}
	results {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		height: 100%;
		width: 100%;
	}
</style>