/* Functions for interacting with Bluesky's API. */

import { BskyAgent } from '@atproto/api';


// Agent that can only query public routes
const agent = new BskyAgent({
	service: 'https://public.api.bsky.app'
});

// Default DID that all feeds are at
const feedDID = 'did:plc:jcoy7v3a2t4rcfdh6i4kza25';

export async function getActorFeeds() {
	return await agent.app.bsky.feed.getActorFeeds({ actor: feedDID });
}
