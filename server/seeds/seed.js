const db = require("../config/connection");
const { User, Craft, Project } = require("../models");
const userSeeds = require("./user.json");
const craftSeeds = require("./craft.json");
const projectSeeds = require("./project.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("User", "users");
  await cleanDB("Craft", "crafts");
  await cleanDB("Project", "projects");

  const crafts = await Craft.insertMany([
    {
      name: "Crochet",
      description:
        "Crochet is like magic with a hook! You take a ball of yarn and, with some clever looping and pulling, turn it into anything from cozy blankets to cute little critters. It’s a one-hook wonder that lets you stitch your way to handmade happiness, one loop at a time!",
    },
    {
      name: "Knitting",
      description:
        "Knitting is like crafting with two wands! You grab some yarn and two needles, then start waving them around to create everything from snug scarves to cozy sweaters. It’s a rhythmic dance of loops that turns string into stylish, handmade magic. Plus, it’s super relaxing—like meditation with a fashionable twist!",
    },
    {
      name: "Painting",
      description:
        "Painting is like bringing a rainbow to life with a brush! You dip into vibrant colors and splash them onto a canvas, turning blank spaces into wild landscapes, dreamy portraits, or abstract wonders. It’s all about letting your imagination run free, where every stroke is a step into your own colorful world. Whether you’re channeling your inner Picasso or just having fun, painting is pure, creative bliss!",
    },
    {
      name: "Clay Modeling",
      description:
        "Clay modeling is like playing with grown-up Play-Doh! You start with a lump of squishy clay and shape it into anything your imagination can dream up—whether it is a cute little creature, a funky mug, or a detailed sculpture. It’s hands-on, messy fun that lets you mold your ideas into something real. Plus, getting your hands dirty is all part of the creative magic!",
    },
    {
      name: "Jewelry",
      description:
        "Jewelry making is like crafting your own treasure! With beads, wire, and a dash of sparkle, you create everything from dainty earrings to bold statement pieces. It’s a bit like being a fashion alchemist, turning simple materials into shiny, wearable art. Whether you’re stringing together a necklace or designing a ring, every piece you make is a little gem of creativity!",
    },
    {
      name: "Stained-Glass",
      description:
        "Stained glass making is like piecing together a puzzle of light and color! You start with sheets of vibrant glass, cut them into shapes, and fit them together to create stunning designs. When the sunlight shines through, your artwork comes alive, casting a rainbow of colors all around. It’s like painting with glass, where every piece you create becomes a glowing masterpiece!",
    },
    {
      name: "Pottery",
      description:
        "Pottery is like spinning magic with mud! You take a lump of clay, throw it on a wheel, and shape it into anything from a cool vase to a quirky mug. As the wheel spins, your hands mold the clay into something uniquely yours. It’s messy, creative, and oh-so-satisfying—plus, you get to say you made your own dishes!",
    },
  ]);
  console.log("Crafts seeded");

  const projects = await Project.insertMany([
    {
      name: "Simple Scarf",
      materials: [
        "Appx 200-300 yds Yarn: Medium weight (worsted #4)",
        "Crochet Hook: size 5mm",
        "Scissors",
        "Tapestry Needle",
      ],
      instructions: `Chain Stitch (Ch): Start by making a chain the width of your scarf, typically 20-30 stitches. 
            Single Crochet (Sc): Work single crochet stitches across the chain. 
            Repeat: Turn your work and continue single crocheting back and forth until the scarf reaches your desired length (usually around 60-70 inches). 
            Finish Off: Cut the yarn, leaving a tail, and use the tapestry needle to weave in the ends. 
            This project is perfect for getting comfortable with basic stitches and handling yarn, and by the end, you’ll have a cozy scarf to show off!`,
      image: "coming soon",
      pricePoint: "$",
      difficulty: "Newbie",
      craft: crafts[0]._id,
    },
    {
      name: "Simple Garter Stich Scarf",
      materials: [
        "200-300yds Medium Weight Yarn",
        "Knitting Needles, 8,, or 5mm",
        "Scissors",
        "Tapestry Needle",
      ],
      instructions: ` 1. Cast On:Start by casting on a number of stitches, typically 20-30, depending on how wide you want your scarf.
                 2. Knit Every Row: Use the garter stitch, which involves knitting every row. This creates a textured, squishy fabric and is a great way to practice your knit stitch.
                  3. Continue: Knit until your scarf reaches the desired length (usually around 60-70 inches). 
                  4. Bind Off:Once the scarf is long enough, bind off the stitches to finish the edge.
                  5. Finish Off:Weave in any loose ends using the tapestry needle. 
                  This project is perfect for getting comfortable with the basics of knitting, and you’ll end up with a cozy, handmade scarf to keep you warm!`,
      image: "coming soon",
      pricePoint: "$",
      difficulty: "Newbie",
      craft: crafts[1]._id,
    },
    {
      name: "Cabled Sweater",
      materials: [
        "1200-2800yds Worsted or DK Weight Yarn",
        "Knitting Needles, 8 or 5mm",
        "Scissors",
        "Cable Needles",
        "Stitch Markers",
        "Tapestry Needle",
      ],
      instructions: `1. Choose a Pattern: Select a cable sweater pattern that includes various cable designs and shaping instructions. Patterns with detailed charts or written instructions are ideal.
                2. Gauge Swatch: Make a gauge swatch to ensure your knitting matches the pattern’s gauge. This step is crucial for achieving the correct fit and look.
                3. Knit the Body:Follow the pattern to knit the body of the sweater, incorporating cable patterns as instructed. This may include working in the round or knitting flat and seaming later. 
                4. Knit the Sleeves: Usually knit separately and then attached to the body. Follow the pattern for cable details and shaping.
                5. Assemble: Once all pieces are completed, seam them together as directed in the pattern. This may involve seaming the sides, attaching sleeves, and adding a collar or finishing edges. 
                6. Finish: Weave in all ends, block the sweater to open up the cable patterns and set the shape, and make any final adjustments. 
                This project involves complex techniques and patience but results in a beautiful, custom-fit sweater that showcases advanced knitting skills. `,
      image: "coming soon",
      pricePoint: "$$$",
      difficulty: "Pro",
      craft: crafts[1]._id,
    },
    {
      name: "Abstract Canvas",
      materials: [
        "Canvas, 8x10in",
        "Acrylic Paints:Whatever Colors you feel.",
        "Paint Brushes(Do not forget a small detail brush)",
        "Palette",
        "Water Container",
        "Rags",
        "Apron or Old Clothes you do not mind getting dirty",
      ],
      instructions: ` 1. Prepare Your Canvas: Set up your workspace and cover it with newspaper or a drop cloth if needed. 
                2. Choose Your Colors:Pick a few colors that you like. Acrylic paints are great for beginners because they dry quickly and are easy to work with.
                3. Start Painting: Apply paint to the canvas using broad strokes or dabs. Feel free to experiment with mixing colors and layering. Don’t worry about making it perfect—abstract art is about expression! 
                4. Add Details: Once the base layer is dry, add more layers or details if you like. You can use different brush sizes or techniques to create texture. 
                5. Finish and Dry: Let your painting dry completely. You can add a final layer or details if desired, or leave it as is.
                6. Display: Once dry, your painting is ready to be displayed or framed! 
                This project is all about having fun and experimenting with colors and techniques, making it perfect for beginners to get comfortable with painting. `,
      image: "coming soon",
      pricePoint: "$",
      difficulty: "Newbie",
      craft: crafts[2]._id,
    },
    {
      name: "Realistic Portrait",
      materials: [
        "Canvas, 16x20in",
        "Oil Paints/Acrylic Paints:Whatever Colors you feel.",
        "Paint Brushes(Do not forget a small detail brush)",
        "Palette",
        "Water Container",
        "Easel(optional)",
        "Rags",
        "Apron or Old Clothes you do not mind getting dirty",
        "Linseed Oil/Turpentine: To change paint consistency",
      ],
      instructions: ` 1. Select a Reference:Choose a high-quality photograph or a live model for your portrait. Ensure the reference has good lighting and clear details.
                2. Sketch the Outline: Lightly sketch the basic shapes and proportions of the portrait on your canvas or paper. Pay close attention to the alignment and proportions. 
                3. Block in Basic Colors: Apply a base layer of colors to establish the general shapes and values. This step helps in laying down the groundwork for more detailed work.
                 4. Develop Details: Gradually build up details, focusing on features like eyes, nose, and mouth. Use smaller brushes for fine details and blending techniques to achieve realistic textures. 
                 5. Refine and Blend: Continuously refine the details and blend colors to create smooth transitions and realistic skin tones. Pay attention to light and shadow for depth. 
                 6. Final Touches: Add final details and highlights to bring the portrait to life. Adjust any areas that need more definition or correction.
                 7. Dry and Varnish:Let the painting dry completely (especially if using oils). Apply varnish if desired for a protective finish. 
                 This project requires advanced skills and patience but results in a stunning, life like portrait that showcases your mastery of painting techniques. `,
      image: "coming soon",
      pricePoint: "$$-$$$",
      difficulty: "Casual/Pro",
      craft: crafts[2]._id,
    },
    {
      name: "Simple Pinch Pot",
      materials: [
        "Air Dry/Oven Bake Clay: 1-2lbs",
        "Basic Sculpting Tools",
        "Rolling Pins",
        "Paints(optional)",
        "Brushes(optional)",
      ],
      instructions: ` 1. Prepare the Clay: Knead the clay to soften it and remove air bubbles. This helps in making it easier to work with. 
                2. Form the Base: Roll a piece of clay into a ball about the size of a small apple.
                3. Create the Pinch Pot: - Press your thumb into the center of the ball to create a deep indentation.- Gently pinch the clay around the edges with your fingers to form the sides of the pot, working from the bottom up. Smooth out any rough spots. 
                4. Shape and Refine: - Use your fingers or sculpting tools to refine the shape and make the rim even.- You can also add texture or patterns by pressing objects or tools into the clay. 5. Dry the Pot:- Allow the pot to dry completely according to the clay’s instructions (air-dry clay may take 24-48 hours; oven-bake clay needs to be baked as per package instructions).6. Decorate (optional): - Once dry, paint your pot with acrylic paints and let it dry. You can add designs or patterns as desired.
                7. Finish:- If you like, you can apply a sealant to protect the paint and give the pot a glossy finish.This project is perfect for beginners as it introduces basic techniques and gives you a functional piece to enjoy or give as a gift `,
      image: "coming soon",
      pricePoint: "$-$$",
      difficulty: "Newbie",
      craft: crafts[3]._id,
    },
    {
      name: "Detailed Ceramic Sculpture",
      materials: [
        "High-quality Clay: Stoneware or Porcelain:5-10lbs",
        "Sculpting Tools",
        "Armature Tools(optional)",
        "Rolling Pins",
        "Kiln Access(local pottery studios usually hold kiln time)",
        "Glazes(optional)",
        "Sponge",
      ],
      instructions: ` 1. Design and Plan: - Create detailed sketches or a maquette (a small model) of your sculpture. Plan the size, details, and any intricate features. 
                2. Build the Armature (if needed): - Construct a support structure using wire or foil to help shape and support the clay. 
                3. Model the Sculpture: - Start adding clay to the armature or directly shaping it into the desired form. Use sculpting tools to refine the details, texture, and overall design. 
                4. Detail Work: - Focus on intricate details, using fine tools and brushes to achieve a high level of precision. Add textures, facial features, or other elements. 
                5. Dry and Refine: - Allow the sculpture to dry slowly and evenly to avoid cracking. Refine any areas as needed. 
                6. Fire the Sculpture: - Once completely dry, fire the sculpture in a kiln according to the clay’s firing instructions. This process turns the clay into a durable ceramic. 
                7. Glaze and Final Firing (optional): - Apply glaze to the sculpture if desired. Glazing adds color and finishes the piece. Fire again in the kiln to set the glaze. 
                8. Finish and Display: - Once fully cooled, inspect the sculpture and add any final touches or clean-ups. 
                
                Your sculpture is now ready to display or use as a centerpiece.This project requires advanced skills in sculpting, firing, and finishing, and it results in a highly detailed and refined ceramic piece that showcases your expertise in clay modeling. `,
      image: "coming soon",
      pricePoint: "$$-$$$",
      difficulty: "Pro",
      craft: crafts[3]._id,
    },
    {
      name: "Simple Beading Bracelet",
      materials: [
        "Beads",
        "Elastic Cord",
        "Crimp Beads/Bead Stops",
        "Crimping Tool",
        "Scissors",
        "Clasps",
      ],
      instructions: `  1. Choose and Prepare Beads: - Select your beads and arrange them in the desired pattern on a flat surface. This helps visualize the design before stringing.
                 2. Cut the Elastic Cord: - Cut a length of elastic cord about 8-10 inches longer than the circumference of your wrist. This extra length will help with tying knots. 
                 3. String the Beads: - Begin threading beads onto the elastic cord. Continue until you have reached the desired length for your bracelet. 
                 4. Secure the Ends: - If using crimp beads, thread a crimp bead onto one end of the cord, then loop the cord back through the crimp bead and use the crimping tool to flatten it. Repeat on the other end if necessary. - If using elastic, simply tie a secure knot, then trim the excess cord. 
                 5. Finish: - If you’re adding a clasp, thread the cord through the clasp or extender and secure with crimp beads, or use knots to secure the ends if not using a clasp. 
                 6. Wear and Enjoy: - Your beaded bracelet is ready to wear! Adjust and make sure it fits comfortably.
                 This project is ideal for beginners as it involves basic techniques like stringing, knotting, and simple finishing, and results in a stylish, custom-made bracelet`,
      image: "coming soon",
      pricePoint: "$",
      difficulty: "Newbie",
      craft: crafts[4]._id,
    },
    {
      name: "Handcrafted Gemstone Pendant",
      materials: [
        "Gemstone",
        "Metal Sheet/Wire",
        "Jewelry Tools",
        "Soldering Supplies",
        "Bezel/Setting Material",
        "Polishing Supplies",
        "Clasps",
      ],
      instructions: ` 1. Design and Plan: - Sketch your pendant design, considering how you will set the gemstone. Decide on the shape and style of the setting. 
                2. Prepare the Metal: - Cut and shape the metal sheet or wire according to your design. Create the bezel or setting for the gemstone. 
                3. Form the Setting: - Shape the metal into the setting using jewelry tools. If creating a custom bezel, carefully shape and solder the metal to fit the gemstone. 
                4. Set the Gemstone: - Place the gemstone into the setting and secure it using bezel settings or prongs. Carefully adjust and solder as needed to ensure a secure fit. 
                5. Solder and Finish: - Solder any joints or connections to complete the pendant. File and smooth out any rough edges.
                 6. Polish: - Use polishing supplies to shine and finish the pendant. This step enhances the appearance and ensures a professional look. 
                 7. Attach to Chain: - Use jump rings and a clasp to attach the pendant to a chain. Ensure all connections are secure.
                  8. Final Adjustments: - Inspect the necklace for any final adjustments or touch-ups needed before wearing or presenting.This project combines advanced metalworking, design skills, and gemstone setting techniques, resulting in a beautifully crafted and unique pendant necklace. `,
      image: "coming soon",
      pricePoint: "$$-$$$",
      difficulty: "Casual/Pro",
      craft: crafts[4]._id,
    },
    {
      name: "Simple Suncatcher",
      materials: [
        "Stained Glass Sheets",
        "Copper Foil",
        "Glass Cutter",
        "Breaking Pliers",
        "Soldering Iron",
        "Flux",
        "Pliers/Tweezers",
        "Safety Glasses/Gloves",
        "Hangers",
      ],
      instructions: ` 1. Design Your Suncatcher: - Sketch a simple design for your suncatcher. It could be a geometric shape, a simple motif, or an abstract pattern. 
                2. Cut the Glass: - Use a glass cutter to score the glass sheets according to your design. Break the glass along the scored lines using breaking pliers. 
                3. Prepare the Glass Pieces: - Clean the glass pieces and apply copper foil around the edges. Press the foil firmly to ensure it sticks to the glass. 
                4. Assemble the Pieces: - Lay out the glass pieces according to your design. Use tweezers to position them if needed. 
                5. Solder the Pieces: - Heat the soldering iron and apply flux to the edges where the pieces meet. Solder along the joints to join the pieces together. Be careful not to overheat the glass. 6. Finish and Clean: - Once the solder is cool, clean the glass and solder joints. You can use a glass cleaner and a cloth to remove any residue. 
                7. Add Hangers: - Attach jump rings or other hangers to the suncatcher for hanging. 
                8. Display: - Hang your suncatcher in a sunny window and enjoy the beautiful light effects! 
                This project is a perfect introduction to stained glass making, allowing you to practice cutting, foiling, and soldering techniques while creating a decorative and functional piece `,
      image: "coming soon",
      pricePoint: "$$-",
      difficulty: "Newbie",
      craft: crafts[5]._id,
    },
    {
      name: "Stained Glass Window Panel",
      materials: [
        "Stained Glass Sheets",
        "Copper Foil",
        "Glass Cutter",
        "Breaking Pliers",
        "Grozing Pliers",
        "Soldering Iron",
        "Frame/Reinforcement",
        "Pliers/Tweezers",
        "Safety Glasses/Gloves",
      ],
      instructions: `1. Design and Planning: - Create a detailed design or use a pattern for the panel. Plan out the colors, textures, and layout. Consider the panel’s size and how it will fit into the frame or space. 
                2. Cut the Glass: - Score and cut the glass pieces according to your design. Use breaking pliers and grozing pliers to refine the cuts and shapes. 
                3. Prepare the Glass Pieces: - Clean the edges of the glass pieces. Apply copper foil or place lead came around the edges, depending on your method. 
                4. Assemble the Panel: - Arrange the glass pieces according to the design. If using copper foil, place the pieces together and solder the joints. If using lead came, fit the pieces into the came and solder the seams.
                5. Solder the Panel: - Carefully solder all the joints. Use a steady hand and apply solder evenly. Ensure all connections are secure and smooth. 
                6. Frame or Reinforce: - If framing, place the panel in a custom frame or add reinforcement bars to support the glass. Ensure the panel is properly secured and finished. 
                7. Clean and Finish: - Clean the finished panel thoroughly to remove any flux residue. Polish the glass and solder joints for a clean, professional finish. 
                8. Install: - Install the panel in its intended location. This may involve mounting it in a window frame or hanging it as a decorative piece.
                 This project challenges your skills in every aspect of stained glass making, including complex cutting, precise soldering, and custom framing, resulting in a stunning and functional work of art `,
      image: "coming soon",
      pricePoint: "$$$",
      difficulty: "Pro",
      craft: crafts[5]._id,
    },
    {
      name: "Simple Handbuilt Clay Bowl",
      materials: [
        "Basic Pottery Clay",
        "Pottery Tools",
        "Rolling Pin",
        "Clay Smoothing Tools",
        "Paints/Glazes",
        "Kiln Access: Optional, but access can be found at local pottery studios",
      ],
      instructions: `1. Prepare the Clay: - Knead the clay to make it pliable and remove any air bubbles. This is called wedging. 
                2. Form the Base: - Roll a piece of clay into a ball and flatten it slightly with your hands or a rolling pin to create the base of the bowl. 
                3. Build the Sides: - Pinch the edges of the clay to shape the sides of the bowl. You can also add coils or slabs of clay to build up the sides if preferred. 
                4. Smooth and Refine: - Use a sponge or smoothing tools to refine the shape and smooth the surface of the bowl. Ensure the edges are even and the shape is balanced. 
                5. Dry the Bowl: - Allow the bowl to dry slowly and evenly. This could take 24-48 hours depending on the clay and environmental conditions. 
                6. Decorate (optional): - If using acrylic paints, decorate the bowl once it’s completely dry. If using ceramic glazes, apply the glaze according to instructions and prepare for firing. 
                7. Fire (if needed): - If using clay that requires firing, arrange for it to be fired in a kiln. Follow the firing instructions based on the clay and glaze used. 
                8. Finish: - After firing (if applicable), your bowl is ready to use or display! 
                This beginner project helps you get familiar with basic hand-building techniques and allows for creativity in shaping and decorating your pottery `,
      image: "coming soon",
      pricePoint: "$",
      difficulty: "Newbie",
      craft: crafts[6]._id,
    },
    {
      name: "Thrown and Trimmed Ceramic Vase",
      materials: [
        "High-Quality Pottery Clay",
        "Pottery Wheel",
        "Pottery Tools",
        "Kiln Access",
        "Glazes",
        "Kiln Supports",
      ],
      instructions: `1. Prepare the Clay: - Knead and wedge the clay to remove air bubbles and make it pliable. 
                2. Throw the Vase: - Center a large piece of clay on the pottery wheel. Begin throwing the clay into the desired vase shape, gradually pulling up the walls and shaping the body.
                 3. Shape and Refine: - Use pottery tools to refine the shape of the vase. Trim the base and any excess clay to achieve a smooth and balanced form. Pay attention to the proportion and symmetry of the vase. 
                 4. Dry and Trim: - Allow the vase to dry to a leather-hard stage. Trim the vase to clean up any irregularities and refine the shape. Be careful not to trim too much. 
                 5. Bisque Fire: - Fire the vase in the kiln to bisque temperature (typically around 1800°F or 1,000°C). This first firing hardens the clay and prepares it for glazing. 
                 6. Glaze the Vase: - Apply glaze to the bisque-fired vase. You can use brushes, dipping, or spraying techniques to apply the glaze. Experiment with different glaze combinations and techniques for unique effects. 
                 7. Glaze Fire: - Fire the glazed vase in the kiln to glaze temperature (usually around 2,200°F or 1,200°C). This second firing melts the glaze and creates the final finish. 
                 8. Finish and Inspect: - After firing, inspect the vase for any imperfections or adjustments needed. Clean any kiln residue and make any final touches. 
                 This project challenges your skills in wheel throwing, trimming, glazing, and firing, resulting in a sophisticated and finely crafted ceramic vase.`,
      image: "coming soon",
      pricePoint: "$$$",
      difficulty: "Pro",
      craft: crafts[6]._id,
    },
  ]);
  console.log("Projects Seeded!");

  await User.create([
    {
      username: "admin",
      email: "admin@gmail.com",
      password: "admin",
      savedCrafts: [crafts[6]._id, crafts[0]._id],
      completedProjects: [projects[0]._id, projects[3]._id],
    },
    {
      username: "Morticia Adams",
      email: "iliveinamansion@creepy.net",
      password: "ilovegomez3",
      savedCrafts: [crafts[6]._id, crafts[0]._id],
      completedProjects: [projects[0]._id, projects[3]._id],
    },
    {
      username: "Tallulah Bankhead",
      email: "hollywoodstar@life.com",
      password: "itsme1",
      savedCrafts: [crafts[2]._id, crafts[4]._id],
      completedProjects: [projects[3]._id, projects[4]._id],
    },
    {
      username: "Lucy Pevensie",
      email: "spareoom@narnia.net",
      password: "foundawardrobe2",
      savedCrafts: [crafts[5]._id, crafts[3]._id],
      ongoingProjects: [projects[10]._id],
    },
    {
      username: "Sirius Black",
      email: "thegrim@hogwarts.edu",
      password: "moonywerewolf",
      completedProjects: [projects[1]._id, projects[4]._id],
    },
    {
      username: "Tobias Rhodes",
      email: "forrestranger@oregon.gov",
      password: "iamgrouchy2",
      savedCrafts: [crafts[5]._id, crafts[6]._id],
      ongoingProjects: [projects[7]._id, projects[9]._id],
    },
    {
      username: "Daniel Nathaniel",
      email: "waggingtail@dog.net",
      password: "woofbark2",
      savedCraft: [crafts[6]._id, crafts[3]._id],
      completedProjects: [projects[12]._id, projects[2]._id],
    },
    {
      username: "Peter Parker",
      email: "webslinger@avengers.com",
      password: "iamspiderman2",
      savedCrafts: [crafts[0]._id],
      completedProjects: [projects[0]._id, projects[6]._id],
      ongoingProjects: [projects[11]._id, projects[5]._id],
    },
  ]);
  console.log("Users are seeded!");

  process.exit();
});
