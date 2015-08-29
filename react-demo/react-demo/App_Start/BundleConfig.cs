using System.Web.Optimization;
using System.Web.Optimization.React;

namespace react_demo
{
    public static class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new JsxBundle("~/bundles/CommentsApp").Include(
                "~/Scripts/Comments/Comment.jsx",
                "~/Scripts/Comments/CommentList.jsx",
                "~/Scripts/Comments/CommentForm.jsx",
                "~/Scripts/Comments/CommentBox.jsx",
                "~/Scripts/Comments/App.jsx",
                "~/Scripts/showdown.js"
            ));

            bundles.Add(new JsxBundle("~/bundles/GithubCardApp").Include(
                "~/Scripts/GithubCard/GithubCard.jsx",    
                "~/Scripts/GithubCard/AddCardForm.jsx",    
                "~/Scripts/GithubCard/App.jsx"    
            ));

            // Forces files to be combined and minified in debug mode
            // Only used here to demonstrate how combination/minification works
            // Normally you would use unminified versions in debug mode.
            BundleTable.EnableOptimizations = true;
        }
    }
}