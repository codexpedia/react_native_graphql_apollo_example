import { gql } from 'apollo-boost';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

/**
 * Get exchange rates for a specified country currency.
 * @param country USD, CNY, JPY, CAD, GBP, etc
 */
export async function fetchExchangeRate(country: string): Promise<any> {

  try {
    const response = await client
          .query({
            query: gql`
              {
                rates(currency: "USD") {
                  name
                  currency
                  rate
                }
              }
            `,
          });

    return response;
  } catch (error) {
      console.error(error);
      return error;
  }

}
