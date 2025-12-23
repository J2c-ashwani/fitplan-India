import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, Baby, Target, Clock, Milk, Activity, Info } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Post-Pregnancy Weight Loss Plan 2025 | Best Diet for Postpartum Weight Loss USA, UK, Australia",
  description: "Complete post-pregnancy weight loss plan with breastfeeding-safe diet, postpartum meal plans, and proven strategies for new moms. Expert-designed for USA, UK, Canada, Australia.",
  keywords: "post pregnancy weight loss, postpartum weight loss, weight loss after pregnancy, breastfeeding weight loss diet, postnatal weight loss, lose baby weight, postpartum diet plan",
  openGraph: {
    title: "Post-Pregnancy Weight Loss Plan 2025 | Complete Guide for New Moms",
    description: "Expert-designed post-pregnancy diet with safe, proven strategies for weight loss while breastfeeding and caring for your newborn.",
    url: "https://fitplanindia.com/plans/post-pregnancy",
  },
}

export default function PostPregnancyWeightLossPage() {
  const breadcrumbItems = [
    { label: "Diet Plans", href: "/plans" },
    { label: "Post-Pregnancy Weight Loss", href: "/plans/post-pregnancy" },
  ]

  const tocItems = [
    { id: "understanding", label: "Understanding Recovery" },
    { id: "differences", label: "Why It's Different" },
    { id: "foods", label: "Nutrition Guide" },
    { id: "meal-plan", label: "Meal Plan" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Will dieting affect my breast milk supply?",
      answer: "Extreme calorie restriction (below 1,500-1,800 calories) CAN decrease milk supply. However, a moderate plan (1,800-2,200 calories) focusing on nutrient-dense foods usually supports supply well. Hydration is even more critical than calories—drink water every time you nurse. If you notice a drop in supply, add a snack of oats and nuts immediately."
    },
    {
      question: "When is it safe to start exercising after a C-section?",
      answer: "Typically, doctors recommend waiting 6-8 weeks for a vaginal birth and 8-10 weeks for a C-section before starting formal exercise. However, gentle walking is encouraged as soon as you feel able (even days after birth) to prevent blood clots. Avoid heavy lifting and abdominal crunches until you have been cleared and checked for Diastasis Recti (abdominal separation)."
    },
    {
      question: "How do I get rid of the 'mommy pooch'?",
      answer: "The 'pooch' is often caused by Diastasis Recti (separation of ab muscles) or weak deep core muscles, NOT just fat. Traditional crunches can make it worse! Focus on 'deep core' breathing exercises (transverse abdominis activation) and pelvic floor rehabilitation. Be patient—it took 9 months to stretch out, give it at least 9 months to recover."
    },
    {
      question: "Can I do Intermittent Fasting while breastfeeding?",
      answer: "It is generally NOT recommended to do strict fasting (16:8) while breastfeeding exclusively, as it can spike cortisol and stress supply. A gentle 12-hour overnight window (e.g., 8 PM to 8 AM) is usually safe, but listen to your body. If you feel dizzy or your supply drops, stop immediately. Your body needs constant fuel for milk production."
    },
    {
      question: "I'm so tired. What foods give the best energy?",
      answer: "Avoid sugar and caffeine crashes. the best energy comes from complex carbs paired with protein: Oatmeal with walnuts, an apple with almond butter, or whole grain toast with eggs. These provide slow-release glucose. Also, low iron is a common cause of postpartum fatigue—eat iron-rich leafy greens, lentils, or lean red meat."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-rose-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-pink-600 font-semibold">
              👶 Safe & Sustainable for New Moms
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Post-Pregnancy Weight Loss Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete evidence-based postpartum weight loss plan with breastfeeding-safe nutrition, realistic meal plans for busy
              moms, recovery-focused strategies, and proven methods to lose baby weight safely. Designed for new mothers in USA,
              UK, Canada, Australia during the fourth trimester and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View Meal Plan</Link>
              </Button>
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/post-pregnancy">Postpartum Exercise Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section id="understanding" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">6-12 months</div>
                <div className="text-gray-600">Expected Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600 mb-2">1 lb/week</div>
                <div className="text-gray-600">Safe Weight Loss</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">25-35 lbs</div>
                <div className="text-gray-600">Average Baby Weight</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">Wait 6 weeks</div>
                <div className="text-gray-600">Before Starting</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Post-Pregnancy Weight Loss: Complete Guide for New Moms</h2>
              <p className="text-lg text-gray-700 mb-6">
                Pregnancy weight gain is normal, necessary, and healthy for growing a baby. The average woman gains 25-35 pounds during
                pregnancy (recommended range: 25-35 lbs for normal weight, 28-40 lbs for underweight, 15-25 lbs for overweight, 11-20 lbs
                for obese). This weight consists of baby (7-8 lbs), placenta (1-2 lbs), amniotic fluid (2 lbs), breast tissue (1-2 lbs),
                increased blood volume (3-4 lbs), fat stores for delivery and breastfeeding (6-8 lbs), and increased uterus size (2 lbs).
                Immediately after delivery, you'll lose approximately 10-13 pounds (baby, placenta, amniotic fluid), leaving 15-25 pounds
                of pregnancy weight to lose gradually over the following 6-12 months through healthy eating, breastfeeding (if applicable),
                and gentle exercise once medically cleared.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The crucial truth about postpartum weight loss is that it should NEVER be rushed, especially if breastfeeding. Your body
                needs adequate nutrition and calories to heal from pregnancy and childbirth (whether vaginal or C-section), produce sufficient
                breast milk for your baby if breastfeeding (requires 300-500 extra calories daily), maintain energy levels for caring for
                newborn with minimal sleep, support hormone rebalancing (takes 6-12 months), and prevent nutrient deficiencies that cause
                hair loss, fatigue, and mood issues. The foundation of safe postpartum weight loss lies in <strong>waiting minimum 6 weeks
                  postpartum before starting any weight loss efforts</strong> (8-12 weeks after C-section, and only after medical clearance),
                eating nutrient-dense whole foods that support recovery and milk production, maintaining MODERATE calorie deficit of only
                300-500 calories daily (never extreme restriction), prioritizing protein (0.8-1g per pound body weight) and healthy fats for
                hormones, staying well-hydrated (100+ oz water daily, especially if breastfeeding), incorporating gentle movement once cleared
                by doctor, getting adequate sleep whenever possible (critical for hormone balance), and being patient with realistic timeline
                of 9-12 months to return to pre-pregnancy weight. This comprehensive postpartum weight loss plan provides a safe, realistic
                approach for losing baby weight while prioritizing your health, recovery, and baby's nutrition.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-pink-800">Benefits of Healthy Postpartum Weight Loss</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Better energy:</strong> Healthy eating combats postpartum fatigue</li>
                    <li>• <strong>Mood improvement:</strong> Nutrient-dense diet supports mental health, reduces postpartum depression risk</li>
                    <li>• <strong>Stronger recovery:</strong> Proper nutrition accelerates healing</li>
                    <li>• <strong>Better milk production:</strong> Adequate calories/nutrients = sufficient milk supply</li>
                    <li>• <strong>Hormone balance:</strong> Gradual weight loss doesn't disrupt hormones</li>
                    <li>• <strong>Self-confidence:</strong> Feeling stronger and healthier boosts mood</li>
                    <li>• <strong>Disease prevention:</strong> Losing excess pregnancy weight reduces diabetes, heart disease risk</li>
                    <li>• <strong>Healthy future pregnancies:</strong> Returning to healthy weight before next pregnancy</li>
                  </ul>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-rose-800">Post-Pregnancy Weight Loss Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Wait 6+ weeks:</strong> No weight loss efforts until postpartum checkup clearance</li>
                    <li>• <strong>Gentle approach:</strong> Maximum 1 pound weekly loss (0.5 lb if breastfeeding)</li>
                    <li>• <strong>Moderate deficit:</strong> Only 300-500 calories below maintenance, never extreme</li>
                    <li>• <strong>Nutrient density priority:</strong> Every calorie counts - choose whole foods</li>
                    <li>• <strong>Hydration critical:</strong> 100+ oz water daily (more if breastfeeding)</li>
                    <li>• <strong>Protein priority:</strong> Supports recovery, milk production, satiety</li>
                    <li>• <strong>Healthy fats essential:</strong> Critical for hormones and baby brain development</li>
                    <li>• <strong>Patience required:</strong> 9-12 months to lose baby weight is normal and healthy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Postpartum Weight Loss is Different */}
      <section id="differences" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Post-Pregnancy Weight Loss Requires a Different Approach</h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <p className="text-gray-700 mb-6">
                Postpartum weight loss is fundamentally different from regular weight loss due to unique physiological, hormonal, and
                lifestyle factors. Understanding these differences is essential for safe, effective, and sustainable results that don't
                compromise your health or your baby's nutrition.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-red-800 mb-3 flex items-center">
                    <Milk className="w-6 h-6 mr-2" />
                    1. Breastfeeding Requires Extra Calories and Nutrients
                  </h3>
                  <p className="text-gray-700 mb-3">
                    If breastfeeding, your body burns an additional 300-500 calories daily producing breast milk (approximately 25-30 oz
                    per day for exclusively breastfed baby). This means you need MORE calories than pre-pregnancy, not fewer. Aggressive
                    calorie restriction below 1,800 calories daily can reduce milk supply, decrease milk quality (lower fat and nutrient
                    content), cause fatigue and weakness making baby care difficult, and trigger rapid weight loss that releases stored
                    toxins into breast milk.
                  </p>
                  <p className="text-sm text-gray-600">
                    Nutrient needs are also HIGHER during breastfeeding than pregnancy for certain vitamins and minerals including vitamin A,
                    vitamin C, vitamin E, B vitamins, iodine, selenium, and zinc. Inadequate nutrition causes hair loss (telogen effluvium),
                    brittle nails, extreme fatigue, mood swings, and depletes maternal nutrient stores. The solution is eating 1,800-2,200
                    calories daily of nutrient-dense whole foods, allowing breastfeeding alone to create a natural 300-500 calorie deficit for
                    gradual 0.5-1 pound weekly weight loss without compromising milk supply or baby's nutrition.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-orange-800 mb-3 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    2. Hormonal Chaos and Recovery Period
                  </h3>
                  <p className="text-gray-700 mb-3">
                    After delivery, your body experiences dramatic hormonal shifts more extreme than puberty or menopause. Estrogen and
                    progesterone plummet within hours, prolactin surges (for milk production), oxytocin increases (for bonding and milk
                    letdown), cortisol remains elevated (from stress and sleep deprivation), thyroid hormones fluctuate (postpartum thyroiditis
                    affects 5-10% of women), and insulin sensitivity changes. These hormonal fluctuations take 6-12 months to stabilize.
                  </p>
                  <p className="text-sm text-gray-600">
                    High cortisol from chronic sleep deprivation, stress, and frequent night wakings promotes belly fat storage, increases
                    sugar cravings, and interferes with weight loss. Thyroid dysfunction (hyperthyroidism followed by hypothyroidism in
                    postpartum thyroiditis) causes weight fluctuations, fatigue, and mood changes. Rushing weight loss with extreme dieting
                    further disrupts these delicate hormones, potentially worsening postpartum depression, anxiety, and recovery. The solution
                    is gentle, gradual weight loss that supports hormone rebalancing naturally.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-yellow-800 mb-3 flex items-center">
                    <Clock className="w-6 h-6 mr-2" />
                    3. Sleep Deprivation and Extreme Fatigue
                  </h3>
                  <p className="text-gray-700 mb-3">
                    New mothers average only 4-5 hours of fragmented sleep nightly in the first 3 months (compared to recommended 7-9 hours).
                    Chronic sleep deprivation has devastating effects on weight loss efforts: increases hunger hormone ghrelin by 28%, decreases
                    satiety hormone leptin by 18%, increases cortisol (stress hormone) promoting fat storage, increases cravings for high-calorie,
                    high-carb foods by 33%, decreases insulin sensitivity worsening blood sugar control, and reduces willpower and decision-making
                    ability making healthy choices nearly impossible.
                  </p>
                  <p className="text-sm text-gray-600">
                    Sleep-deprived mothers burn 300-400 fewer calories daily due to reduced NEAT (non-exercise activity thermogenesis) - they
                    move less, fidget less, and conserve energy unconsciously. Adding aggressive diet and exercise on top of severe sleep
                    deprivation is a recipe for failure, burnout, and potentially dangerous health consequences. The realistic approach is
                    prioritizing sleep whenever possible (nap when baby naps), focusing on easy, convenient healthy foods that require minimal
                    preparation, and accepting slower weight loss while your baby is very young (0-6 months).
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-blue-800 mb-3 flex items-center">
                    <Activity className="w-6 h-6 mr-2" />
                    4. Physical Recovery and Core/Pelvic Floor Healing
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Your body needs time to heal from pregnancy and childbirth regardless of delivery method. After vaginal delivery: pelvic
                    floor muscles are stretched and weakened (may take 3-6 months to regain strength), perineum may have tears or episiotomy
                    requiring healing (2-6 weeks), and abdominal muscles are separated (diastasis recti in 60% of pregnancies). After C-section:
                    major abdominal surgery requires 6-8 weeks minimum recovery, internal and external incisions must heal, and core strength is
                    significantly compromised.
                  </p>
                  <p className="text-sm text-gray-600">
                    Rushing into intense exercise before proper healing causes: worsening of diastasis recti (abdominal separation), pelvic floor
                    dysfunction (incontinence, prolapse), injury risk due to relaxin hormone (loosens joints, present up to 6 months postpartum),
                    and delayed overall recovery. The safe approach is waiting for doctor clearance (6 weeks minimum, 8-12 weeks for C-section),
                    starting with gentle walking and pelvic floor exercises (Kegels), working with pelvic floor physical therapist if available,
                    and gradually progressing to more intense exercise only after core and pelvic floor are rehabilitated properly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foods to Eat & Avoid */}
      <section id="foods" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Post-Pregnancy Nutrition Guide: Best Foods for Recovery & Weight Loss</h2>

            <div className="space-y-8">
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">✅ Best Foods for Postpartum (Nutrient-Dense & Breastfeeding-Safe)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Focus on nutrient-dense whole foods that support recovery, provide energy for baby care, support breast milk production
                    (if applicable), and promote gradual healthy weight loss. Every calorie should be packed with nutrition.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Iron-Rich Foods (Critical!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Lean red meat:</strong> Beef, lamb (most bioavailable iron)</li>
                        <li>• <strong>Chicken, turkey (dark meat):</strong> Higher iron than white meat</li>
                        <li>• <strong>Organ meats:</strong> Liver (highest iron source)</li>
                        <li>• <strong>Lentils, chickpeas, beans:</strong> Plant-based iron (pair with vitamin C)</li>
                        <li>• <strong>Spinach, kale, Swiss chard:</strong> Cooked for better absorption</li>
                        <li>• <strong>Fortified cereals:</strong> Quick iron source for busy moms</li>
                        <li>• Iron replenishes blood loss from delivery</li>
                        <li>• Prevents postpartum anemia and fatigue</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Protein for Recovery & Milk:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Salmon:</strong> Protein + omega-3 for baby brain development</li>
                        <li>• <strong>Eggs:</strong> Complete protein, choline for baby</li>
                        <li>• <strong>Greek yogurt:</strong> Protein + calcium + probiotics</li>
                        <li>• <strong>Chicken breast:</strong> Lean protein for recovery</li>
                        <li>• <strong>Cottage cheese:</strong> High protein, calcium</li>
                        <li>• <strong>Lentils, quinoa:</strong> Plant protein + fiber</li>
                        <li>• <strong>Protein powder:</strong> Convenient for smoothies</li>
                        <li>• Aim for 20-30g protein per meal</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Healthy Fats (Hormone Support):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Fatty fish:</strong> Salmon, sardines (omega-3 DHA for baby brain)</li>
                        <li>• <strong>Walnuts:</strong> Plant-based omega-3</li>
                        <li>• <strong>Avocado:</strong> Healthy fats, fiber, vitamins</li>
                        <li>• <strong>Olive oil:</strong> Anti-inflammatory</li>
                        <li>• <strong>Chia seeds, flaxseeds:</strong> Omega-3, fiber</li>
                        <li>• <strong>Eggs (whole):</strong> Choline critical for baby</li>
                        <li>• <strong>Nuts, nut butters:</strong> Energy-dense for busy moms</li>
                        <li>• Don't eliminate fats - critical for hormones!</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Complex Carbs (Energy for Mom & Baby):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Oats:</strong> Galactagogue (increases milk supply), fiber, energy</li>
                        <li>• <strong>Brown rice, quinoa:</strong> B vitamins, sustained energy</li>
                        <li>• <strong>Sweet potato:</strong> Vitamin A (critical for baby), fiber</li>
                        <li>• <strong>Whole wheat bread/pasta:</strong> Convenient carb source</li>
                        <li>• <strong>Legumes:</strong> Protein + carbs + fiber combo</li>
                        <li>• Don't go low-carb while breastfeeding - affects supply!</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Calcium & Vitamin D (Bone Health):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Dairy:</strong> Milk, yogurt, cheese (calcium for you and baby)</li>
                        <li>• <strong>Fortified plant milks:</strong> Calcium + vitamin D</li>
                        <li>• <strong>Sardines (with bones):</strong> High calcium</li>
                        <li>• <strong>Leafy greens:</strong> Calcium, folate, iron</li>
                        <li>• <strong>Fortified cereals:</strong> Quick calcium source</li>
                        <li>• Breastfeeding depletes calcium - prioritize daily!</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-2 text-blue-800 flex items-center">
                      <Info className="w-5 h-5 mr-2" />
                      Lactation-Boosting Foods (If Breastfeeding)
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      These foods are traditionally believed to increase milk supply (galactagogues), though individual response varies:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 grid md:grid-cols-2 gap-2">
                      <li>• Oats, oatmeal (most effective)</li>
                      <li>• Fenugreek seeds, fennel seeds</li>
                      <li>• Brewer's yeast</li>
                      <li>• Flaxseeds, chia seeds</li>
                      <li>• Leafy greens (spinach, kale)</li>
                      <li>• Garlic (in moderate amounts)</li>
                      <li>• Nuts and seeds</li>
                      <li>• Adequate water intake (most important!)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">❌ Foods to LIMIT or AVOID Postpartum</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">If Breastfeeding - Limit/Avoid:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Caffeine (excess):</strong> Limit to 200-300mg daily (1-2 cups coffee). Passes to baby, may cause fussiness</li>
                        <li>• <strong>Alcohol:</strong> If consuming, wait 2-3 hours per drink before breastfeeding ("pump and dump" not necessary)</li>
                        <li>• <strong>High-mercury fish:</strong> Shark, swordfish, king mackerel, tilefish (mercury in breast milk)</li>
                        <li>• <strong>Potential allergens (if baby sensitive):</strong> Dairy, soy, eggs, nuts (only if baby shows allergic reaction)</li>
                        <li>• <strong>Strong spices (if baby fusses):</strong> Some babies sensitive to garlic, spicy foods</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">General Foods to Limit (All Moms):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Processed junk food:</strong> Empty calories, no nutrients for recovery</li>
                        <li>• <strong>Sugary drinks, soda:</strong> Calorie bombs, blood sugar spikes</li>
                        <li>• <strong>Fried foods:</strong> High calorie, low nutrient density</li>
                        <li>• <strong>Excessive sweets:</strong> Desserts, candy, cookies (occasional treat okay)</li>
                        <li>• <strong>Fast food:</strong> High calorie, sodium, unhealthy fats</li>
                        <li>• Focus on nutrient density - every calorie should nourish you!</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Plan */}
      <section id="meal-plan" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Post-Pregnancy Meal Plan (1,800-2,000 Calories for Breastfeeding)</h2>
            <p className="text-center text-gray-600 mb-12">
              Nutrient-dense meal plan supporting recovery and milk production while promoting gradual weight loss. If not breastfeeding,
              reduce to 1,500-1,700 calories by reducing portions slightly.
            </p>

            <Card className="border-pink-200">
              <CardHeader className="bg-pink-50">
                <CardTitle className="text-pink-800">Sample Day - Quick & Easy for Busy Moms</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Breakfast (7:30 AM) - 450 calories:</h4>
                    <p className="text-gray-700">Oatmeal (¾ cup dry) made with whole milk + ground flaxseeds (1 tbsp) + berries (½ cup) + walnuts (¼ cup) + 1 boiled egg</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 20g | Iron | Omega-3 | Galactagogue (oats boost milk)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM) - 200 calories:</h4>
                    <p className="text-gray-700">Greek yogurt (1 cup) + granola (¼ cup) + drizzle of honey</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 20g | Calcium | Quick energy</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM) - 500 calories:</h4>
                    <p className="text-gray-700">Salmon (4 oz) + quinoa (¾ cup cooked) + roasted vegetables (2 cups) + avocado (¼) + side salad</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 35g | Omega-3 DHA for baby | Iron | Complete meal</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM) - 250 calories:</h4>
                    <p className="text-gray-700">Apple with almond butter (2 tbsp) + glass of whole milk (8 oz)</p>
                    <p className="text-sm text-gray-500 mt-1">Healthy fats | Calcium | Sustained energy for evening baby care</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM) - 550 calories:</h4>
                    <p className="text-gray-700">Grilled chicken breast (5 oz) + sweet potato (1 medium) + steamed broccoli (2 cups) with olive oil + small whole wheat roll</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 40g | Vitamin A | Iron | Filling dinner</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Evening Snack (Optional, 9:30 PM) - 150 calories:</h4>
                    <p className="text-gray-700">Cottage cheese (½ cup) + berries OR handful of trail mix</p>
                    <p className="text-sm text-gray-500 mt-1">If hungry during night feedings - slow-digesting protein</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-pink-200">
                  <p className="text-sm font-semibold text-pink-700">Daily Total: 2,100 calories | Protein: 135g (26%) | Carbs: 220g (42%) | Fat: 75g (32%) | Supports breastfeeding + gradual weight loss</p>
                  <p className="text-xs text-gray-500 mt-1">Hydration: 100+ oz water daily (add 24 oz per breastfeeding session)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Personalized Post-Pregnancy Plan?</h2>
            <p className="text-xl mb-8">
              Get customized meal plans tailored to your recovery stage, breastfeeding status, and lifestyle as a new mom.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Postpartum Consultation</h4>
                <p className="text-white text-sm mb-4">Personalized plan - <PriceDisplay amountIn={500} amountUs={50} /></p>
                <Button size="lg" className="w-full bg-white text-pink-600" asChild>
                  <Link href="/contact">Book Now - <PriceDisplay amountIn={500} amountUs={50} /></Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Baby className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Postpartum Exercise</h4>
                <p className="text-yellow-100 text-sm mb-4">Safe workout program</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/post-pregnancy">View Workouts</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-4">
          <RelatedContent />
        </div>
      </div>
    </div >
  )
}
