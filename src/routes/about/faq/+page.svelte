<script>
	import { Accordion } from 'bits-ui';

	const items = [
		{
			value: '1',
			title: 'What is the meaning of life?',
			content:
				'To become a better person, to help others, and to leave the world a better place than you found it.'
		},
		{
			value: '2',
			title: 'How do I become a better person?',
			content: 'Read books, listen to podcasts, and surround yourself with people who inspire you.'
		},
		{
			value: '3',
			title: 'What is the best way to help others?',
			content: 'Give them your time, attention, and love.'
		}
	];
</script>

<h1>Frequently Asked Questions</h1>

<Accordion.Root class="w-full sm:max-w-[70%]" type="multiple">
	{#each items as item (item.value)}
		<Accordion.Item value={item.value}>
			<Accordion.Header>
				<Accordion.Trigger>
					<p style="font-weight: bold">{item.title}</p>
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>
				<p>{item.content}</p>
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
