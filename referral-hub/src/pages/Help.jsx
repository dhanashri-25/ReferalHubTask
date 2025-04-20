import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, HelpCircle, Users, Gift } from 'lucide-react'

const Help = () => {
  return (
      <div className=" mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3"
        >
          <HelpCircle className="w-7 h-7 text-purple-600" />
          <h1 className="text-2xl font-bold text-gray-800">Welcome to the Help Center 💬</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-start space-x-3">
            <Sparkles className="text-pink-500 w-6 h-6 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">What is Referral Hub?</h2>
              <p className="text-gray-600">
                Referral Hub is a platform where users can earn rewards by referring others and explore amazing opportunities
                through a trusted network. Whether you're looking to grow your network or discover new products — Referral Hub has you covered!
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Users className="text-blue-500 w-6 h-6 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">How do referrals work?</h2>
              <p className="text-gray-600">
                Share your unique referral link with your friends. When they join or complete a task using your link, you both earn points and rewards!
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Gift className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">What rewards can I earn?</h2>
              <p className="text-gray-600">
                Rewards range from exclusive discounts to exciting merchandise and even cashbacks. Keep referring and unlock premium bonuses.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center pt-4"
        >
          <p className="text-gray-500 text-sm">
            Still need help? Reach out to our support team anytime 💌
          </p>
        </motion.div>
      </div>
  )
}

export default Help
