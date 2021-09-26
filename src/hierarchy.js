export const hierarchy = [
  {
    level: "1",
    title: "VP of Sales",
    status: "critical",
    lowerLevel: [
      {
        level: "2.1",
        title: "Sales Manager",
        region: "North America",
        status: "critical",
        lowerLevel: [
          {
            level: "2.1.1",
            title: "Sales Lead",
            region: "Canada",
            status: "normal",
            lowerLevel: [
              {
                level: "2.1.1.1",
                title: "Sales Rep",
                region: "Toronto",
                status: "normal",
              },
              {
                level: "2.1.1.2",
                title: "Sales Rep",
                region: "Vancouver",
                status: "normal",
              },
            ],
          },
          {
            level: "2.1.2",
            title: "Sales Lead",
            region: "USA",
            status: "critical",
            lowerLevel: [
              {
                level: "2.1.2.1",
                title: "Sales Rep",
                region: "New York",
                status: "warning",
              },
              {
                level: "2.1.2.2",
                title: "Sales Rep",
                region: "Dallas",
                status: "critical",
              },
              {
                level: "2.1.2.3",
                title: "Sales Rep",
                region: "Los Angeles",
                status: "critical",
              },
            ],
          },
        ],
      },
      {
        level: "2.2",
        title: "Sales Manager",
        region: "Europe",
        status: "warning",
        lowerLevel: [
          {
            level: "2.2.1",
            title: "Sales Lead",
            region: "Germany",
            status: "warning",
            lowerLevel: [
              {
                level: "2.2.1.1",
                title: "Sales Rep",
                region: "Berlin",
                status: "normal",
              },
              {
                level: "2.2.1.2",
                title: "Sales Rep",
                region: "Frankfurt",
                status: "critical",
              },
            ],
          },
          {
            level: "2.2.2",
            title: "Sales Lead",
            region: "USA",
            status: "critical",
            lowerLevel: [
              {
                level: "2.2.2.1",
                title: "Sales Rep",
                region: "Milan",
                status: "normal",
              },
            ],
          },
        ],
      },
    ],
  },
];
