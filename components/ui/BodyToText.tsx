const defaults = { nonTextBehavior: 'remove' };
export const BodyToText = ({ value }: any) => {
  let opts = {};
  const options = Object.assign({}, defaults, opts);
  return value
    .map((block: any) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`;
      }

      return block.children.map((child: any) => child.text).join('');
    })
    .join('\n\n');
};
