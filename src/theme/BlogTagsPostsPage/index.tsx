/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/BlogTagsPostsPage';
import BlogSidebar from '@theme/BlogSidebar';
import BlogPostPreview from '@theme/BlogPostPreview';

function pluralize(count: number, word: string) {
  return count > 1 ? `${word}s` : word;
}

function BlogTagsPostPage(props: Props): JSX.Element {
  const {metadata, items, sidebar} = props;
  const {allTagsPath, name: tagName, count} = metadata;

  return (
    <Layout
      title={`Posts tagged "${tagName}"`}
      description={`Blog | Tagged "${tagName}"`}
      wrapperClassName="blog-wrapper">
      <div className="container margin-vert--lg">
        <div className="row">
          {/* <div className="col col--2">
            <BlogSidebar sidebar={sidebar} />
          </div> */}
          <main className="col col--12">
            <h1>
              {count} {pluralize(count, 'post')} tagged with &quot;{tagName}
              &quot;
            </h1>
            <Link href={allTagsPath}>View All Tags</Link>
            <div className="margin-vert--xl">
              <div className="row">
              {items.map(({content: BlogPostContent}) => (
                <div className="col col--4">
                <BlogPostPreview
                  key={BlogPostContent.metadata.permalink}
                  frontMatter={BlogPostContent.frontMatter}
                  metadata={BlogPostContent.metadata}
                  truncated={BlogPostContent.metadata.truncated}>
                  <BlogPostContent />
                </BlogPostPreview>
                </div>
              ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default BlogTagsPostPage;
