module.exports = {
  ci: {
    collect: {
      startServerCommand: "pnpm dev",
      url: ["http://localhost:3000/pl"],
      numberOfRuns: 1,
      settings: {
        preset: "lighthouse:default",
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.95 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:seo": ["error", { minScore: 0.95 }]
      }
    }
  }
};

