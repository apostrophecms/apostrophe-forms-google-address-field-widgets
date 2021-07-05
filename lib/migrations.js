module.exports = (self, parts) => {
  self.apos.migrations.add('03062021-aposAddsLabelsToSplittedFields', () => {
    return self.apos.migrations.eachDoc({
      type: 'apostrophe-forms'
    }, 5, async (doc) => {

      const items = doc.contents.items.map((item) => {
        if (!Array.isArray(item.addressParts)) {
          return item;
        }

        const addressParts = Object.keys(parts).reduce((acc, part) => {
          return {
            ...acc,
            [part]: {
              label: part,
              splitted: item.addressParts.includes(part),
              disabled: true
            }
          };
        }, {});

        return {
          ...item,
          addressParts
        };
      });

      return self.apos.docs.db.update({
        _id: doc._id
      }, {
        $set: {
          'contents.items': items
        }
      });
    });
  }, { safe: true });
};
