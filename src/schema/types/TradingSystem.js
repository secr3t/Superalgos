import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';
import {
  StrategyType,
} from './index';

const Type = new GraphQLObjectType({
  name: 'TradingSystem',
  description: 'Everything you need to know about a trading system',
  fields: () => ({
    id: { type: GraphQLID },
    fbSlug: { type: GraphQLString },
    Strategies: {
      args: { activeOnly: { type: GraphQLBoolean } },
      type: new GraphQLList(StrategyType),
      resolve(parent, { activeOnly }) {
        if (activeOnly) {
          return parent.Strategies.filter(Strategy => Strategy.active);
        }
        return parent.Strategies;
      },
    },
  }),
});

export default Type;
