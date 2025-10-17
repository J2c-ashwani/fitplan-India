import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, Users, Target, TrendingUp, Activity, Brain, Info } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Teenage Weight Management Plan 2025 | Healthy Diet for Teens 13-19 USA, UK, Australia",
  description: "Complete teenage weight management plan with healthy diet for teens, growth-supporting nutrition, and safe weight loss strategies. Expert-designed for teens 13-19 in USA, UK, Canada, Australia.",
  keywords: "teenage diet plan, teen weight loss, healthy diet for teenagers, teen nutrition, weight loss for teens, teenage meal plan, adolescent diet, teen fitness plan",
  openGraph: {
    title: "Teenage Weight Management Plan 2025 | Complete Guide",
    description: "Expert-designed nutrition and fitness plan for teenagers focusing on healthy growth, development, and sustainable weight management.",
    url: "https://fitplanindia.com/plans/teenagers",
  },
}

export default function TeenagersWeightManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-cyan-600 font-semibold">
              🌟 Healthy Growth & Development
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Teenage Weight Management Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete evidence-based nutrition and fitness plan for teenagers (ages 13-19) focusing on healthy growth, development, 
              athletic performance, and sustainable weight management. Designed for teens in USA, UK, Canada, Australia with emphasis 
              on balanced nutrition, NOT extreme dieting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View Meal Plan</Link>
              </Button>
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/teenagers">Teen Exercise Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">Ages 13-19</div>
                <div className="text-gray-600">Target Age Range</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Growth Focus</div>
                <div className="text-gray-600">Not Crash Diets</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">2,000-2,800</div>
                <div className="text-gray-600">Daily Calories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">Balanced</div>
                <div className="text-gray-600">All Food Groups</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Teenage Nutrition and Weight Management</h2>
              <p className="text-lg text-gray-700 mb-6">
                The teenage years (ages 13-19, also called adolescence) are a critical period of rapid growth, development, and body 
                changes second only to infancy. During puberty and adolescence, teenagers experience growth spurts adding 8-12 inches 
                in height, significant muscle and bone mass development, dramatic hormonal changes affecting metabolism and body composition, 
                brain development and maturation (continues until age 25), sexual maturation and development, and psychological/emotional 
                changes affecting body image and eating behaviors. Approximately 20% of American teenagers are classified as overweight 
                or obese (BMI at or above 85th percentile for age and gender), with similar rates in UK, Canada, and Australia, driven 
                by processed food consumption, sedentary screen time, lack of physical activity, stress eating, and poor sleep habits.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The critical truth about teenage weight management is that this is NOT the time for restrictive diets, calorie counting, 
                or extreme weight loss approaches. Adolescents have HIGHER calorie and nutrient needs than adults due to rapid growth and 
                development, and inadequate nutrition during this critical window can permanently impair growth (stunted height), delay 
                puberty, reduce bone density (increasing osteoporosis risk later), cause hormonal imbalances (irregular periods in girls, 
                delayed development in boys), impair brain development and academic performance, trigger or worsen eating disorders 
                (anorexia, bulimia, binge eating disorder affecting 3-5% of teens), and create lifelong unhealthy relationships with food. 
                The foundation of healthy teenage weight management lies in <strong>focusing on health behaviors, NOT weight loss</strong> - 
                eating balanced, nutrient-dense meals with all food groups represented, staying active through sports, recreation, or 
                structured exercise for 60 minutes daily, getting adequate sleep (8-10 hours nightly for teenagers), limiting processed 
                junk food and sugary drinks (but not eliminating treats entirely), developing positive body image and self-esteem regardless 
                of weight, and involving parents/family in creating healthy home environment with nutritious food availability and positive 
                role modeling. This comprehensive teenage nutrition plan provides age-appropriate guidance for healthy eating, weight 
                management, and athletic performance without dangerous restriction or diet culture messaging.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-cyan-800">Benefits of Healthy Teen Nutrition</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Optimal growth:</strong> Reach full height potential, proper development</li>
                    <li>• <strong>Better athletic performance:</strong> More energy, strength, endurance for sports</li>
                    <li>• <strong>Improved focus:</strong> Better concentration, grades, academic performance</li>
                    <li>• <strong>Clear skin:</strong> Reduced acne through balanced nutrition</li>
                    <li>• <strong>Better mood:</strong> Stable energy prevents mood swings, irritability</li>
                    <li>• <strong>Strong bones:</strong> Peak bone mass built during teen years (prevents osteoporosis)</li>
                    <li>• <strong>Healthy weight:</strong> Natural weight regulation without dieting</li>
                    <li>• <strong>Disease prevention:</strong> Reduced risk of type 2 diabetes, heart disease</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-blue-800">Teenage Nutrition Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>NO calorie restriction:</strong> Growing teens need 2,000-3,000+ calories daily</li>
                    <li>• <strong>All food groups:</strong> Grains, protein, dairy, fruits, vegetables, healthy fats</li>
                    <li>• <strong>Regular meals:</strong> 3 meals + 1-2 snacks daily, don't skip breakfast</li>
                    <li>• <strong>Adequate protein:</strong> 0.5-0.8g per pound body weight for growth</li>
                    <li>• <strong>Calcium priority:</strong> 1,300mg daily for bone development</li>
                    <li>• <strong>Iron important:</strong> Especially for teenage girls (menstruation loss)</li>
                    <li>• <strong>Hydration focus:</strong> 8-10 glasses water daily, limit sugary drinks</li>
                    <li>• <strong>Balance, not restriction:</strong> Mostly nutritious foods, occasional treats okay</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Teen Dieting is Dangerous */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Extreme Dieting is Dangerous for Teenagers</h2>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <p className="text-gray-700 mb-6">
                Restrictive diets, extreme calorie cutting, fad diets, and weight loss pills are NOT appropriate for teenagers and 
                can cause serious, permanent damage during this critical growth period. Parents, teens, and educators must understand 
                these risks to avoid lifelong consequences.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-red-800 mb-3 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2" />
                    1. Stunted Growth and Development
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Severe calorie restriction (below 1,800-2,000 calories daily) during teenage years can permanently stunt height 
                    growth by up to 2-4 inches, as growth plates in bones require adequate calories, protein, calcium, and vitamin D 
                    to lengthen properly. Once growth plates close (girls: 14-16 years, boys: 16-18 years), height cannot be regained. 
                    Inadequate nutrition also delays or halts puberty, prevents proper breast development in girls, impairs sexual 
                    development in boys (low testosterone), and causes amenorrhea (loss of periods) in girls.
                  </p>
                  <p className="text-sm text-gray-600">
                    Multiple studies show that teenage girls who diet frequently are 2-3 times more likely to be shorter in adulthood 
                    compared to non-dieting peers. The most rapid growth occurs during early puberty (girls: 10-14, boys: 12-16), making 
                    this the WORST time to restrict calories. Teen athletes who diet severely are at particular risk of growth impairment 
                    despite high activity levels, as their calorie needs are even higher than sedentary teens.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-orange-800 mb-3 flex items-center">
                    <Brain className="w-6 h-6 mr-2" />
                    2. Eating Disorders and Mental Health Damage
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Teenage dieting is the #1 predictor of developing eating disorders including anorexia nervosa (affects 0.5-1% of teen 
                    girls, 10% mortality rate - highest of any psychiatric disorder), bulimia nervosa (affects 1-2% of teen girls), and 
                    binge eating disorder (affects 2-3% of all teens). Research shows teens who diet are 5-18 times MORE likely to develop 
                    eating disorders than non-dieting peers, with risk increasing with diet severity.
                  </p>
                  <p className="text-sm text-gray-600">
                    Even without developing full eating disorders, dieting teens experience body image issues, low self-esteem, depression 
                    (dieting teens are 2x more likely to be depressed), anxiety, social isolation, obsessive thoughts about food/weight, 
                    and damaged relationships with food lasting into adulthood. The psychological damage from teenage dieting often persists 
                    decades later as chronic dieting behaviors, yo-yo weight cycling, and unhealthy food relationships that are extremely 
                    difficult to reverse.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-yellow-800 mb-3 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    3. Bone Density Loss and Osteoporosis Risk
                  </h3>
                  <p className="text-gray-700 mb-3">
                    The teenage years are when 90% of peak bone mass is built (ages 10-18), and this window CANNOT be recovered later. 
                    Inadequate calcium intake (need 1,300mg daily during teens), vitamin D deficiency, low calorie/protein intake, and 
                    amenorrhea (loss of periods from under-eating) all drastically reduce bone density. Girls who lose their periods due 
                    to under-eating/over-exercising can lose 2-6% bone density PER YEAR, increasing stress fracture risk immediately and 
                    osteoporosis risk by 50-300% in later life (ages 50+).
                  </p>
                  <p className="text-sm text-gray-600">
                    Teen athletes who diet severely while training intensely are at particularly high risk of "Female Athlete Triad" 
                    (low energy availability, menstrual dysfunction, low bone density) or "RED-S" (Relative Energy Deficiency in Sport) 
                    affecting both genders. These conditions cause stress fractures, increased injury risk, impaired athletic performance, 
                    and permanent bone damage. Peak bone mass achieved by age 18-20 determines osteoporosis risk 40-50 years later - 
                    damage during teen years cannot be fully reversed with later calcium supplementation.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-blue-800 mb-3 flex items-center">
                    <Activity className="w-6 h-6 mr-2" />
                    4. Metabolic Damage and Weight Gain Rebound
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Ironically, teenage dieting typically INCREASES weight in the long-term through metabolic adaptation and rebound weight 
                    gain. Severe calorie restriction slows metabolism by 15-30% (adaptive thermogenesis), decreases muscle mass (muscle 
                    burns more calories than fat), and increases hunger hormones (ghrelin) while decreasing satiety hormones (leptin). When 
                    diet inevitably ends (95% of diets fail within 1-2 years), rapid weight regain occurs, typically ending at HIGHER weight 
                    than pre-diet.
                  </p>
                  <p className="text-sm text-gray-600">
                    Multiple longitudinal studies show teenage dieters weigh MORE 5-10 years later compared to non-dieting teens of similar 
                    starting weights. Each diet cycle makes subsequent weight loss harder due to cumulative metabolic damage. Additionally, 
                    severe dieting during puberty can permanently alter set point weight and metabolism, making weight management more difficult 
                    throughout adulthood. The solution is NOT dieting but rather establishing sustainable healthy eating habits that support 
                    growth while naturally regulating weight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthy Eating Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Healthy Eating Guide for Teenagers: What to Eat</h2>
            
            <div className="space-y-8">
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">✅ Best Foods for Teenage Growth & Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Focus on nutrient-dense whole foods from all food groups that support rapid growth, brain development, athletic 
                    performance, and natural weight regulation. NO food groups should be eliminated.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Protein (Growth & Muscle):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Lean meats:</strong> Chicken, turkey, lean beef (iron + protein)</li>
                        <li>• <strong>Fish:</strong> Salmon, tuna (omega-3 for brain)</li>
                        <li>• <strong>Eggs:</strong> Complete protein, choline for brain</li>
                        <li>• <strong>Greek yogurt:</strong> Protein + calcium</li>
                        <li>• <strong>Milk:</strong> Protein + calcium + vitamin D</li>
                        <li>• <strong>Beans, lentils:</strong> Protein + fiber</li>
                        <li>• <strong>Nuts, nut butters:</strong> Protein + healthy fats</li>
                        <li>• Need: 50-75g daily (0.5-0.8g per lb)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Calcium Foods (Bone Growth):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Milk:</strong> 300mg per cup</li>
                        <li>• <strong>Yogurt:</strong> 400mg per cup</li>
                        <li>• <strong>Cheese:</strong> 200-300mg per oz</li>
                        <li>• <strong>Fortified plant milks:</strong> 300mg per cup</li>
                        <li>• <strong>Leafy greens:</strong> Kale, collards</li>
                        <li>• <strong>Tofu (calcium-set):</strong> 250mg per serving</li>
                        <li>• <strong>Sardines (with bones):</strong> High calcium</li>
                        <li>• Need: 1,300mg daily for teens!</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Iron Foods (Energy & Growth):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Red meat:</strong> Beef, lamb (most bioavailable)</li>
                        <li>• <strong>Chicken, turkey (dark meat):</strong> Higher iron</li>
                        <li>• <strong>Fish:</strong> Tuna, salmon</li>
                        <li>• <strong>Fortified cereals:</strong> Quick iron source</li>
                        <li>• <strong>Beans, lentils:</strong> Plant iron (pair with vitamin C)</li>
                        <li>• <strong>Spinach, kale:</strong> Cooked for better absorption</li>
                        <li>• Girls need 15mg daily (menstruation)</li>
                        <li>• Boys need 11mg daily (muscle growth)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Whole Grains (Energy & Brain Fuel):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Whole wheat bread, pasta:</strong> B vitamins, fiber</li>
                        <li>• <strong>Brown rice, quinoa:</strong> Complex carbs</li>
                        <li>• <strong>Oatmeal:</strong> Sustained energy for school</li>
                        <li>• <strong>Whole grain cereals:</strong> Quick breakfast option</li>
                        <li>• 6-8 servings daily for active teens</li>
                        <li>• DON'T eliminate carbs - teens need them for growth and brain!</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Fruits & Vegetables (Vitamins & Minerals):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Colorful variety:</strong> Different colors = different nutrients</li>
                        <li>• <strong>Fresh, frozen, or canned:</strong> All count!</li>
                        <li>• <strong>Berries:</strong> Antioxidants for skin and health</li>
                        <li>• <strong>Leafy greens:</strong> Vitamins A, C, K, iron, calcium</li>
                        <li>• <strong>Orange/yellow:</strong> Carrots, sweet potato (vitamin A)</li>
                        <li>• Aim: 2-3 cups vegetables, 1.5-2 cups fruit daily</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Info className="w-6 h-6 text-yellow-600 mr-3" />
                    <CardTitle className="text-yellow-700">⚠️ Foods to LIMIT (Not Eliminate!) for Teens</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    These foods should be limited but NOT completely eliminated. Complete restriction leads to cravings, binge eating, 
                    and unhealthy relationships with food. Practice moderation, not deprivation.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800">Limit These (Occasional Treats OK):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Sugary drinks:</strong> Soda, sweet tea, energy drinks (empty calories, sugar crashes)</li>
                        <li>• <strong>Fast food:</strong> High calories, low nutrients (once weekly max)</li>
                        <li>• <strong>Candy, sweets:</strong> Occasional treat okay, not daily</li>
                        <li>• <strong>Chips, crackers:</strong> Choose baked versions, small portions</li>
                        <li>• <strong>Fried foods:</strong> Limit to occasional indulgence</li>
                        <li>• <strong>Sugary cereals:</strong> Choose whole grain options instead</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800">Healthy Swaps for Teens:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Soda → Flavored water, 100% juice (small amounts)</li>
                        <li>• Candy → Fresh fruit, dark chocolate (moderate)</li>
                        <li>• Chips → Air-popped popcorn, veggie chips</li>
                        <li>• Fast food burger → Homemade burger on whole wheat bun</li>
                        <li>• Sugary cereal → Whole grain cereal with fruit</li>
                        <li>• Ice cream → Frozen yogurt, fruit smoothie</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Meal Plan */}
      <section id="meal-plan" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Teenage Meal Plan (2,200-2,500 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              Balanced meal plan for active teenagers. Adjust portions based on activity level, growth stage, and individual needs. 
              Very active teen athletes may need 2,800-3,500+ calories daily.
            </p>

            <Card className="border-cyan-200">
              <CardHeader className="bg-cyan-50">
                <CardTitle className="text-cyan-800">Sample Day - Teen-Friendly, Easy Meals</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Breakfast (7:00 AM - DON'T SKIP!) - 500 calories:</h4>
                    <p className="text-gray-700">Whole wheat toast (2 slices) + scrambled eggs (2) + avocado (¼) + glass of milk (8 oz) + banana</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 25g | Calcium: 300mg | Sustained energy for school</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM) - 250 calories:</h4>
                    <p className="text-gray-700">Greek yogurt (1 cup) + granola (¼ cup) + berries (½ cup)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 20g | Calcium: 400mg | Quick school snack</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Lunch (12:30 PM) - 600 calories:</h4>
                    <p className="text-gray-700">Turkey and cheese sandwich (whole wheat bread) + baby carrots + hummus (3 tbsp) + apple + chocolate milk (8 oz)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 35g | Calcium: 500mg | Balanced, portable lunch</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">After-School Snack (3:30 PM) - 300 calories:</h4>
                    <p className="text-gray-700">Peanut butter (2 tbsp) + whole grain crackers (10) + glass of milk (8 oz)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 18g | Calcium: 300mg | Energy before sports/homework</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM) - 700 calories:</h4>
                    <p className="text-gray-700">Grilled chicken breast (6 oz) + brown rice (1 cup) + roasted broccoli (2 cups) + whole wheat roll with butter + side salad</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 50g | Iron | Complete family dinner</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Evening Snack (Optional, 9:00 PM) - 200 calories:</h4>
                    <p className="text-gray-700">Air-popped popcorn (3 cups) + string cheese OR fruit smoothie</p>
                    <p className="text-sm text-gray-500 mt-1">Light snack if hungry before bed</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-cyan-200">
                  <p className="text-sm font-semibold text-cyan-700">Daily Total: 2,550 calories | Protein: 148g (23%) | Carbs: 315g (49%) | Fat: 79g (28%) | Calcium: 1,500mg ✓</p>
                  <p className="text-xs text-gray-500 mt-1">Hydration: 8-10 glasses water daily + additional for sports</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need Guidance for Your Teen's Nutrition?</h2>
            <p className="text-xl mb-8">
              Get personalized nutrition plans designed specifically for teenage growth, development, and athletic performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Teen Nutrition Consultation</h4>
                <p className="text-white text-sm mb-4">Personalized plan - $100</p>
                <Button size="lg" className="w-full bg-white text-cyan-600" asChild>
                  <Link href="/contact">Book Now - $100</Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Users className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Teen Fitness Guide</h4>
                <p className="text-yellow-100 text-sm mb-4">Free exercise program</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/teenagers">View Workouts</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
