/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Legacy Plan Redirects
      { source: '/plans/diabetes-type-1', destination: '/plans/diabetes', permanent: true },
      { source: '/plans/diabetes-type-2', destination: '/plans/diabetes', permanent: true },
      { source: '/plans/keto', destination: '/plans/keto-diet', permanent: true },
      { source: '/plans/low-carb', destination: '/plans/keto-diet', permanent: true },
      { source: '/plans/muscle-gain', destination: '/workouts/muscle-gain', permanent: true },
      { source: '/plans/home-workout', destination: '/workouts/general', permanent: true },
      { source: '/plans/metabolic-syndrome', destination: '/plans/metabolic', permanent: true },
      { source: '/plans/fat-loss', destination: '/plans/metabolic', permanent: true },
      { source: '/plans/weight-loss', destination: '/plans/metabolic', permanent: true },
      { source: '/plans/weight-gain', destination: '/plans/gym-diet-combo', permanent: true },
      { source: '/plans/high-protein', destination: '/plans/gym-diet-combo', permanent: true },
      { source: '/plans/vegan', destination: '/plans/vegetarian', permanent: true },
      { source: '/plans/indian-diet', destination: '/plans', permanent: true },
      { source: '/plans/balanced-diet', destination: '/plans', permanent: true },
      { source: '/plans/general-wellness', destination: '/plans', permanent: true },
      { source: '/plans/busy-professionals', destination: '/plans', permanent: true },
      { source: '/plans/office-workers', destination: '/plans', permanent: true },
      { source: '/plans/twenties', destination: '/plans', permanent: true },
      { source: '/plans/thirties', destination: '/plans', permanent: true },
      { source: '/plans/forties', destination: '/plans', permanent: true },
    ]
  },
}

export default nextConfig
