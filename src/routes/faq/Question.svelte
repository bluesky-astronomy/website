<script>
	let { title = 'Untitled', children } = $props();
	import { Accordion } from 'bits-ui';
	import IconCaret from '~icons/mdi/caret';

	// TODO: make this animation prettier
	let open = $state(false);
	let rotation = $derived(open ? 0 : 180);
</script>

<Accordion.Item
	style="background-color: var(--color-offwhite); border-radius: 20px; margin-bottom: 20px; padding: 10px 20px 10px 20px"
	onclick={() => (open = !open)}
>
	<Accordion.Header>
		<Accordion.Trigger
			style="width: 100%; background: none; border: none; min-height: 50px; display: flex; justify-content: space-between; align-items: center;"
		>
			<h2 style="font-size: 25px; margin: 0px">{title}</h2>
			<IconCaret style="font-size: 30px; transform: rotate({rotation}deg);" />
		</Accordion.Trigger>
	</Accordion.Header>
	<Accordion.Content>
		<p style="margin-bottom: 20px; margin-top: 10px">{@render children()}</p>
	</Accordion.Content>
</Accordion.Item>
