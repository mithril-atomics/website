# How to update the team

Everything about the team lives in **`team.json`** (project root). Both the Team page and the team strip on the Home page read from it — edit once, both update.

## Change a person
Open `team.json`, find the person, edit `name`, `role`, `bio` or `linkedin`. Keep the quotes and commas.

## Add a person
Copy one block (from `{` to `}`) inside `founders` or `advisors`, paste it after a comma, and change the values.

```json
{
  "name": "Full Name",
  "role": "Job title",
  "photo": "assets/team/firstname.jpg",
  "linkedin": "https://www.linkedin.com/in/their-profile",
  "bio": "One or two sentences.",
  "hidden": false
}
```

## Remove / reorder
- Hide without deleting: set `"hidden": true`.
- Reorder: move the block up or down. Order in the file = order on the site.
- Home shows the **founders** list only.

## Photos
Save a head-and-shoulders JPG, ratio 4:5 (about 640×800), in `assets/team/` and set `photo` to its path. Dr. Myneni's current photo is low-resolution — replace `assets/team/myneni.jpg`.

## Current roster (from team information.pdf, Oct 2026)
- Founding team: Devendra Mishra, Rikteem Bhowmick, Abhijeet Ghodgaonkar, Vashishtha Kochar
- Advisors: Prof. B.S. Murty, Prof. Sai Santosh Kumar Raavi, Dr. Niranjan Myneni, Srikrishna Vadrevu
- Rahul Rai and Vijay Yadav were removed (not in the updated PDF).

## Still needed
- Vashishtha Kochar: bio (currently `[BIO]`). Role: Lead Software Engineering.
- Dr. Myneni's photo is low-resolution — replace `assets/team/myneni.jpg`.
