import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Copy, Check, X, Send, Linkedin, Phone, MessageCircle } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)
  const email = 'info.ahadunnobi@gmail.com'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactOptions = [
    { 
      icon: <Mail size={22} />, 
      label: 'Email Client', 
      desc: 'Native app mail', 
      href: `mailto:${email}?subject=Portfolio Inquiry`,
      primary: true 
    },
    { 
      icon: <Linkedin size={22} />, 
      label: 'LinkedIn', 
      desc: 'Direct Message', 
      href: 'https://www.linkedin.com/in/ahadunnobi',
      primary: false 
    },
    { 
      icon: <Phone size={22} />, 
      label: 'Direct Dial', 
      desc: '+8801610-176181', 
      href: 'tel:+8801610-176181',
      primary: false 
    },
    { 
      icon: <MessageCircle size={22} />, 
      label: 'Messenger', 
      desc: 'FB Workplace', 
      href: 'https://m.me/ahadunnobe',
      primary: false 
    }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Centered Modal Container */}
          <div className="modal-fixed-wrapper">
            <motion.div 
              className="contact-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="modal-header">
                <div>
                  <h3 className="modal-title">Establish Channel</h3>
                  <p className="modal-subtitle">Direct communication protocol</p>
                </div>
                <button className="modal-close" onClick={onClose}>
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                {/* Email Copy Section */}
                <div className="copy-section">
                  <div className="email-display">
                    <Mail size={16} className="text-accent" />
                    <span>{email}</span>
                  </div>
                  <button 
                    className={`copy-btn ${copied ? 'copied' : ''}`}
                    onClick={copyToClipboard}
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Contact Grid */}
                <div className="modal-contact-grid">
                  {contactOptions.map((opt, i) => (
                    <a key={i} href={opt.href} target="_blank" rel="noopener noreferrer" className={`modal-opt-card ${opt.primary ? 'primary' : ''}`}>
                      <div className="opt-icon">{opt.icon}</div>
                      <div className="opt-details">
                        <span className="opt-label">{opt.label}</span>
                        <span className="opt-desc">{opt.desc}</span>
                      </div>
                      <Send size={14} className="opt-arrow" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                <p className="footer-note">Response Latency: ~12-24 Hours</p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ContactModal
