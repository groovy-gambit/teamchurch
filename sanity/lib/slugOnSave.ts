import speakingurl from 'speakingurl';
import { DocumentActionComponent, useDocumentOperation } from 'sanity';

const encodeTitle = (title: string) => encodeURI(title.toLowerCase().replace(/\s+/g, '-').slice(0, 200));

const typesToGenerateSlugFor = ['lecture'];

export function slugOnSave(originalPublishAction: DocumentActionComponent) {
  const BetterAction = (props: any) => {
    // use the hook to get access to the patch function with the current document
    const { patch } = useDocumentOperation(props.id, props.type);
    const patchSlug = (slugValue: string) => {
      patch.execute([{ set: { slug: { current: slugValue, _type: 'slug' } } }]);
    };
    const originalResult = originalPublishAction(props);
    return {
      ...originalResult,
      onHandle: async () => {
        // if (!props.draft || typesToGenerateSlugFor.indexOf(props.type) > -1) {
        if (!props.draft) {
          return originalResult!.onHandle!();
        }
        // check for a title and existing slug
        if (props.draft.title && !props.published?.slug?.current) {
          // use the generator package used in sanity core with default values
          const generatedSlug = props.draft.title ? defaultSlugify(props.draft.title) : null;
          // double check we've got a slug and patch it in
          if (generatedSlug) {
            patchSlug(generatedSlug);
          }
        }
        // then delegate to original handler
        originalResult!.onHandle!();
      },
    };
  };
  return BetterAction as DocumentActionComponent;
}

const defaultSlugify = (value: string) => {
  const slugifyOpts = { truncate: 200, symbols: true };
  return value ? speakingurl(value, slugifyOpts) : '';
};
