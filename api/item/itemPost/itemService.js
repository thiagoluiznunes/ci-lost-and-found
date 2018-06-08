import Item from './item';

// Create REST API, adds CRUD to Mongog's schema
Item.methods(['get', 'post']);

// Return post/put methods updated
Item.updateOptions({ new: true, runValidators: true });

export default Item;
