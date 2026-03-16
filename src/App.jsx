import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Heart, Thermometer, Droplets, Wind, Battery, Brain, 
  Bone, Activity, Shield, Pill, Apple, Home, Leaf,
  Check, ChevronRight, Star, Sparkles, ArrowRight, RefreshCw,
  AlertTriangle, User, Clock, Soup, Salad, Citrus, Coffee,
  Flame, LeafyGreen, Copy, Printer, Zap
} from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Moon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const Sun = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const symptomsList = [
  { id: 'headache', icon: Brain },
  { id: 'fever', icon: Thermometer },
  { id: 'cough', icon: Wind },
  { id: 'cold', icon: Droplets },
  { id: 'fatigue', icon: Battery },
  { id: 'nausea', icon: Activity },
  { id: 'bodyPain', icon: Bone },
  { id: 'stomachPain', icon: Activity },
  { id: 'backPain', icon: Bone },
  { id: 'soreThroat', icon: Wind },
  { id: 'dizziness', icon: Brain },
  { id: 'lossOfAppetite', icon: Apple },
  { id: 'anxiety', icon: Shield },
  { id: 'insomnia', icon: Moon },
  { id: 'indigestion', icon: Activity },
  { id: 'dehydration', icon: Droplets },
  { id: 'inflammation', icon: Flame },
  { id: 'weakness', icon: Battery },
  { id: 'rash', icon: Shield },
  { id: 'chills', icon: Thermometer },
];

function BackgroundGlow({ theme }) {
  if (theme !== 'dark') return null;
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 bg-slate-950/40"></div>
    </div>
  );
}

function Header({ t, lang, setLang, theme, setTheme }) {
  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl border-b ${theme === 'dark' ? 'bg-slate-950/70 border-slate-800/50' : 'bg-white/70 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="relative bg-gradient-to-br from-indigo-600 to-violet-600 p-2 rounded-xl">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">{t.title}</h1>
              <p className="text-[10px] text-slate-500 font-medium tracking-wider">{t.by}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${theme === 'dark' ? 'border-slate-800 bg-slate-900 text-slate-300' : 'border-slate-200 bg-white text-slate-600'}`}>
              {lang === 'en' ? 'বাংলা' : 'English'}
            </button>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`p-2 rounded-full transition-all ${theme === 'dark' ? 'bg-slate-900 text-slate-300' : 'bg-white text-slate-600 border border-slate-200'}`}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ t, theme }) {
  return (
    <div className="text-center mb-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-bold mb-4">
        <Sparkles className="w-4 h-4" /> {t.subtitle}
      </div>
      <h2 className={`text-3xl sm:text-4xl font-extrabold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
        {t.heroHeadingPrefix}{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
          {t.heroHeadingHighlight}
        </span>
      </h2>
      <p className="text-slate-500 max-w-2xl mx-auto font-medium">{t.heroDesc}</p>
    </div>
  );
}

function StepBar({ t, step, theme }) {
  return (
    <div className="flex justify-center mb-10">
      <div className={`inline-flex items-center gap-2 p-1.5 rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/50 border-slate-800/50' : 'bg-white border-slate-200 shadow-sm'}`}>
        {t.steps.map((s, i) => (
          <div key={i} className="flex items-center">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${step === i + 1 ? 'bg-indigo-600 text-white shadow-lg' : step > i + 1 ? 'text-emerald-500' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 flex items-center justify-center rounded-full text-[10px] ${step === i + 1 ? 'bg-white text-indigo-600' : step > i + 1 ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}>
                {step > i + 1 ? <Check size={12} strokeWidth={3} /> : i + 1}
              </span>
              <span className="hidden sm:inline">{s}</span>
            </div>
            {i < 3 && <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-800 mx-1" />}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- REVISED ProfileStep with input validation ---
function ProfileStep({ t, theme, userInfo, setUserInfo, handleNext }) {
  // Validation logic
  const [touched, setTouched] = useState(false);

  const isFilled = 
    !!userInfo.name.trim() && 
    !!userInfo.gender && 
    !!userInfo.age && 
    !!userInfo.height && 
    !!userInfo.weight;

  // Optionally show a message after pressing "Next"
  const [errorMsg, setErrorMsg] = useState('');

  // Instead of calling handleNext directly, do our own
  const handleTryNext = () => {
    setTouched(true);
    setErrorMsg('');
    if (!isFilled) {
      setErrorMsg(t.profileRequired);
    } else {
      handleNext();
    }
  };

  return (
    <div className={`p-8 rounded-3xl border animate-fadeIn ${theme === 'dark' ? 'bg-slate-900/40 border-slate-800/50' : 'bg-white border-slate-200 shadow-xl'}`}>
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><User className="text-indigo-500" /> {t.steps[0]}</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        <input 
          type="text" 
          placeholder={t.placeholderName} 
          className={`w-full px-4 py-3 rounded-xl border ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`}
          value={userInfo.name}
          onChange={(e) => {
            const val = e.target.value;
            // Prevent updating name if input is a number
            if (!/^\d+$/.test(val)) {
              setUserInfo({ ...userInfo, name: val });
            } else {
              setUserInfo({ ...userInfo, name: "" }); // Reset on numeric input
            }
          }}
        />
        <div className="flex gap-2">
          {[t.male, t.female].map(g => (
            <button
              key={g}
              type="button"
              onClick={() => setUserInfo({...userInfo, gender: g})}
              className={`flex-1 py-3 rounded-xl text-sm font-bold border ${userInfo.gender === g ? 'bg-indigo-600 text-white' : 'bg-transparent text-slate-500'}`}
            >{g}</button>
          ))}
        </div>
        <div className="w-full">
          <input 
            type="text"
            inputMode="numeric"
            placeholder={t.placeholderAge} 
            className={`w-full px-4 py-3 rounded-xl border ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`}
            value={userInfo.age}
            onChange={(e) => setUserInfo({ ...userInfo, age: e.target.value })}
          />
          {userInfo.age !== "" && !/^\d+$/.test(userInfo.age) && (
            <div className="text-xs text-red-500 mt-1">{t.ageInvalid || "Age must be a number."}</div>
          )}
          {userInfo.age !== "" && /^\d+$/.test(userInfo.age) && parseInt(userInfo.age, 10) > 100 && (
            <div className="text-xs text-yellow-500 mt-1">{t.ageWarning || "Age seems unusually high."}</div>
          )}
        </div>
        <div className="w-full">
          <input 
            type="text"
            inputMode="numeric"
            placeholder={t.height} 
            className={`w-full px-4 py-3 rounded-xl border ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`}
            value={userInfo.height}
            onChange={(e) => setUserInfo({ ...userInfo, height: e.target.value })}
          />
          {userInfo.height !== "" && !/^\d+$/.test(userInfo.height) && (
            <div className="text-xs text-red-500 mt-1">
              {t.heightInvalid || "Height must be a number."}
            </div>
          )}
          {userInfo.height !== "" && /^\d+$/.test(userInfo.height) && (parseInt(userInfo.height, 10) < 90 || parseInt(userInfo.height, 10) > 210) && (
            <div className="text-xs text-yellow-500 mt-1">
              {t.heightWarning || "Height seems unusual."}
            </div>
          )}
        </div>
        <div>
          <input 
            type="text"
            inputMode="numeric"
            placeholder={t.weight} 
            className={`w-full px-4 py-3 rounded-xl border ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`}
            value={userInfo.weight}
            onChange={(e) => setUserInfo({ ...userInfo, weight: e.target.value })}
          />
          {userInfo.weight !== "" && !/^\d+$/.test(userInfo.weight) && (
            <div className="text-xs text-red-500 mt-1">
              {t.weightInvalid || "Weight must be a number."}
            </div>
          )}
          {userInfo.weight !== "" && /^\d+$/.test(userInfo.weight) && (parseInt(userInfo.weight, 10) < 10 || parseInt(userInfo.weight, 10) > 150) && (
            <div className="text-xs text-yellow-500 mt-1">
              {t.weightWarning || "Weight seems unusual."}
            </div>
          )}
        </div>
      </div>
      {errorMsg && (
        <div className="mt-3 font-bold text-red-500">{errorMsg}</div>
      )}
      <div className="mt-10 flex justify-end">
        <button
          type="button"
          // Disable if any required field is missing
          onClick={handleTryNext}
          className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all
            ${
              isFilled
                ? "bg-indigo-600 text-white shadow-indigo-600/30 hover:bg-indigo-700"
                : "bg-slate-300 text-slate-400 cursor-not-allowed"
            }`}
          disabled={!isFilled}
        >
          {t.next} <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

// --- REVISED SymptomsStep with selection/textarea validation ---
function SymptomsStep({ t, theme, selectedSymptoms, toggleSymptom, customSymptoms, setCustomSymptoms, handleNext, handleBack }) {
  // Add error logic
  const [error, setError] = useState('');
  const hasAnySymptom =
    selectedSymptoms.length > 0 || (customSymptoms && customSymptoms.trim().length > 0);

  const handleTryNext = () => {
    setError('');
    if (!hasAnySymptom) {
      setError(t.symptomsRequired);
    } else {
      handleNext();
    }
  };

  return (
    <div className={`p-8 rounded-3xl border animate-fadeIn ${theme === 'dark' ? 'bg-slate-900/40 border-slate-800/50' : 'bg-white border-slate-200 shadow-xl'}`}>
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Activity className="text-pink-500" /> {t.steps[1]}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {symptomsList.map(s => (
          <button
            key={s.id}
            onClick={() => toggleSymptom(s.id)}
            className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-2 ${selectedSymptoms.includes(s.id) ? 'bg-pink-600 text-white' : 'text-slate-500'}`}
          >
            <s.icon size={18} /> {t.symptomLabel(s.id)}
          </button>
        ))}
      </div>
      <textarea placeholder={t.customSymptoms} className={`w-full px-4 py-3 rounded-xl border min-h-[100px] ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`} value={customSymptoms} onChange={(e) => setCustomSymptoms(e.target.value)} />
      {error && (
        <div className="mt-3 font-bold text-red-500">{error}</div>
      )}
      <div className="mt-10 flex justify-between">
        <button onClick={handleBack} className="px-6 py-3 font-bold text-slate-500">{t.back}</button>
        <button
          type="button"
          onClick={handleTryNext}
          className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all
            ${hasAnySymptom
              ? "bg-pink-600 text-white shadow-pink-600/30 hover:bg-pink-700"
              : "bg-slate-300 text-slate-400 cursor-not-allowed"
            }`}
          disabled={!hasAnySymptom}
        >{t.analyze} <Zap size={18} /></button>
      </div>
    </div>
  );
}
function AnalysisStep({ t }) {
  return (
    <div className="h-[400px] flex flex-col items-center justify-center text-center animate-pulse">
      <div className="relative mb-8"><div className="w-24 h-24 rounded-full border-4 border-indigo-600/20 border-t-indigo-600 animate-spin"></div><div className="absolute inset-0 flex items-center justify-center"><Brain size={40} className="text-indigo-600" /></div></div>
      <h3 className="text-2xl font-bold mb-2">{t.analyzing}</h3>
      <p className="text-slate-500 font-medium">{t.analyzingDesc}</p>
    </div>
  );
}

function ResultsStep({ t, theme, results, userInfo, setToast, resetApp }) {
  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-2xl">
        <h3 className="text-3xl font-extrabold mb-2">{t.complete}</h3>
        <p className="text-indigo-100 font-medium">{t.completeDesc(userInfo.name)}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className={`p-6 rounded-3xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <h4 className="font-bold text-emerald-500 flex items-center gap-2 mb-4"><Apple /> {t.recFoods}</h4>
          <p className="text-xs text-slate-500 mb-4">{t.recFoodsDesc}</p>
          {results.foods.map((f, i) => (
            <div key={i} className="mb-3 p-3 rounded-2xl bg-emerald-500/5">
              <p className="font-bold text-sm text-emerald-600">{f.name}</p>
              <p className="text-xs text-slate-500">{f.benefit}</p>
            </div>
          ))}
        </div>
        <div className={`p-6 rounded-3xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <h4 className="font-bold text-amber-500 flex items-center gap-2 mb-4"><Home /> {t.homeRemedies}</h4>
          <p className="text-xs text-slate-500 mb-4">{t.homeRemediesDesc}</p>
          {results.remedies.map((r, i) => (
            <div key={i} className="mb-3 p-3 rounded-2xl bg-amber-500/5">
              <p className="font-bold text-sm text-amber-600">{r.name}</p>
              <p className="text-xs text-slate-500">{r.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className={`p-6 rounded-3xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <h4 className="font-bold text-sky-500 flex items-center gap-2 mb-4"><Pill /> {t.posMedicines}</h4>
          <p className="text-xs text-slate-500 mb-4">{t.posMedicinesDesc}</p>
          {(results.medicines || []).length > 0 ? (
            <>
              {results.medicines.map((m, i) => (
                <div key={i} className="mb-3 p-3 rounded-2xl bg-sky-500/5">
                  <p className="font-bold text-sm text-sky-600">{m.name}</p>
                  {!!m.description && <p className="text-xs text-slate-500">{m.description}</p>}
                  {!!m.warning && <p className="text-[11px] font-bold text-amber-600 mt-1">{m.warning}</p>}
                </div>
              ))}
              <div className="mt-4 p-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 text-xs text-amber-700 dark:text-amber-300">
                <span className="font-extrabold">{t.medWarning}</span>
              </div>
            </>
          ) : (
            <p className="text-xs text-slate-500 italic">{t.medWarning}</p>
          )}
        </div>

        <div className={`p-6 rounded-3xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <h4 className="font-bold text-violet-500 flex items-center gap-2 mb-4"><Clock /> {t.dietPlanTitle}</h4>
          <p className="text-xs text-slate-500 mb-4">{t.dietPlanDesc}</p>
          {(results.dietPlan || []).length > 0 ? (
            <div className="space-y-3">
              {results.dietPlan.map((d, i) => (
                <div key={i} className="p-3 rounded-2xl bg-violet-500/5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-bold text-sm text-violet-600">{d.meal}</p>
                    {!!d.time && (
                      <span className="px-2 py-1 rounded-full text-[10px] font-extrabold bg-violet-500/10 text-violet-600">
                        {d.time}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{d.foods}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">{t.dietPlanDesc}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 pt-6">
        <button
          onClick={() => {
            navigator.clipboard.writeText('Health Report').then(() => setToast(t.copied));
          }}
          className="flex-1 py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 
            bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors"
        >
          <Copy size={18} /> {t.copy}
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 
            bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors"
        >
          <Printer size={18} /> {t.print}
        </button>
        <button
          onClick={resetApp}
          className="flex-1 py-4 px-6 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/30 hover:bg-indigo-700 transition-colors"
        >
          <RefreshCw size={18} /> {t.again}
        </button>
      </div>
    </div>
  );
}

function QuickProfile({ t, userInfo, bmi, selectedSymptoms, theme }) {
  // Helper to get BMI status, color class & tip
  function getBmiStatusInfo(bmiValue) {
    if (!bmiValue || isNaN(bmiValue)) {
      return {
        status: '—',
        color: 'text-slate-400',
        tip: ''
      };
    }
    const bmiNum = typeof bmiValue === "string" ? parseFloat(bmiValue) : bmiValue;
    if (bmiNum < 18.5) {
      return {
        status: t.bmiUnderweight || "Underweight",
        color: "text-blue-500",
        tip: t.bmiUnderweightTip || "Consider a nutritious calorie-rich diet. Consult a doctor if feeling weak."
      };
    } else if (bmiNum < 25) {
      return {
        status: t.bmiHealthy || "Healthy Weight",
        color: "text-green-600",
        tip: t.bmiHealthyTip || "Congratulations! Keep up a balanced diet and regular activity."
      };
    } else if (bmiNum < 30) {
      return {
        status: t.bmiOverweight || "Overweight",
        color: "text-yellow-600",
        tip: t.bmiOverweightTip || "Prioritize an active lifestyle and moderate portions."
      };
    } else {
      return {
        status: t.bmiObesity || "Obesity",
        color: "text-rose-600",
        tip: t.bmiObesityTip || "Consider dietary adjustments and seek a doctor's advice for personalized care."
      };
    }
  }

  const bmiInfo = getBmiStatusInfo(bmi);

  return (
    <div className={`p-6 rounded-[32px] border ${theme === 'dark' ? 'bg-[#0f172a] border-white/5' : 'bg-white border-slate-200'}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">{t.quickProfile}</h3>
        <span className="px-2 py-1 bg-indigo-500/10 text-indigo-500 rounded-full text-[10px] font-extrabold">{t.live}</span>
      </div>
      <div className="grid grid-cols-1 gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-slate-500/5">
          <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{t.name}</p>
          <p className="font-bold text-xs truncate">{userInfo.name || "—"}</p>
        </div>
        <div className='p-3 rounded-2xl bg-slate-500/5'>       
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">BMI</p>
            <span className="font-bold text-xl text-indigo-500">{bmi || "—"}</span>
          </div>
          <div className="flex flex-col items-end min-w-[92px]">
            <span className={`block text-[12px] font-bold rounded-full px-3 py-1 ${bmiInfo.color} ${bmiInfo.status !== '—' ? 'bg-gray-400/10' : ''}`}>
              {bmiInfo.status}
            </span>
          </div>
          </div>
        {bmiInfo.tip && (
              <span className="block text-[12px] text-slate-500 font-normal pt-1">{bmiInfo.tip}</span>
            )}
        </div>
      </div>
      <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">{t.selectedSymptoms}</h4>
      <div className="flex flex-wrap gap-2 mb-6">
        {selectedSymptoms.length > 0
          ? selectedSymptoms.map(id => (
              <span key={id} className="px-2 py-1 bg-indigo-500/10 text-indigo-500 text-[10px] font-extrabold rounded-lg">
                {t.symptomLabel(id)}
              </span>
            ))
          : <p className="text-xs text-slate-500 italic">{t.noSymptoms}</p>}
      </div>
      <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
        <p className="text-xs font-extrabold uppercase text-indigo-500 mb-2">{t.healthTip}</p>
        <p className="text-xs text-slate-500">{t.healthTipDesc}</p>
      </div>
    </div>
  );
}

function EmergencyCard({ t, theme }) {
  const title = t.emergencyTitle;
  const flags = Array.isArray(t.emergencyFlags) ? t.emergencyFlags : [];
  return (
    <div className={`p-6 rounded-[32px] border ${theme === 'dark' ? 'bg-[#0f172a] border-white/5' : 'bg-white border-slate-200'}`}>
      <h3 className="font-bold text-sm mb-4 flex items-center gap-2 text-rose-500">
        <AlertTriangle size={16} /> {title}
      </h3>
      <ul className="space-y-3">
        {flags.map((flag, i) => (
          <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-500">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> {flag}
          </li>
        ))}
      </ul>
    </div>
  );
}



function Footer({ t, theme }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-12 py-8 border-t border-slate-200 dark:border-slate-800 text-center">
      <div className="flex flex-col items-center gap-3">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {t.title} {t.by}
        </p>
        <div className="flex gap-5 items-center mt-1 justify-center">
          <a
            href="https://github.com/Kajol-Kibria"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 text-slate-400 transition"
          >
            <FaGithub size={22} />
          </a>
          
          <a
            href="https://www.linkedin.com/in/kajol-kibria/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 text-slate-400 transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="kajolkibria95@gmail.com"
            title="Email"
            className="hover:text-indigo-500 text-slate-400 transition"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
        <div className="mt-3 text-xs text-slate-400">
          <div>
            {t.rights ||
              `© ${currentYear} All rights reserved. For educational purposes only.`}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow-2xl font-bold text-sm z-50">{toast}</div>
  );
}

// --- Main App ---
function App() {
  const { t: tr, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || i18n.language || "en";

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  const t = useMemo(() => {
    const year = new Date().getFullYear();
    return {
      lang,
      title: tr("title"),
      by: tr("by"),
      subtitle: tr("subtitle"),
      heroDesc: tr("heroDesc"),
      heroHeadingPrefix: tr("heroHeadingPrefix"),
      heroHeadingHighlight: tr("heroHeadingHighlight"),
      steps: [tr("steps.profile"), tr("steps.symptoms"), tr("steps.analysis"), tr("steps.results")],
      name: tr("form.name"),
      age: tr("form.age"),
      gender: tr("form.gender"),
      weight: tr("form.weight"),
      height: tr("form.height"),
      placeholderName: tr("form.placeholderName"),
      placeholderAge: tr("form.placeholderAge"),
      male: tr("form.male"),
      female: tr("form.female"),
      other: tr("form.other"),
      next: tr("actions.next"),
      back: tr("actions.back"),
      analyze: tr("actions.analyze"),
      customSymptoms: tr("customSymptoms"),
      profileRequired: tr("validation.profileRequired"),
      symptomsRequired: tr("validation.symptomsRequired"),
      analyzing: tr("status.analyzing"),
      analyzingDesc: tr("status.analyzingDesc"),
      complete: tr("status.complete"),
      completeDesc: (name) => tr("status.completeDesc", { name }),
      recFoods: tr("sections.recFoods"),
      recFoodsDesc: tr("sections.recFoodsDesc"),
      homeRemedies: tr("sections.homeRemedies"),
      homeRemediesDesc: tr("sections.homeRemediesDesc"),
      posMedicines: tr("sections.posMedicines"),
      posMedicinesDesc: tr("sections.posMedicinesDesc"),
      medWarning: tr("sections.medWarning"),
      dietPlanTitle: tr("sections.dietPlanTitle"),
      dietPlanDesc: tr("sections.dietPlanDesc"),
      copy: tr("actions.copy"),
      print: tr("actions.print"),
      again: tr("actions.again"),
      copied: tr("status.copied"),
      quickProfile: tr("sections.quickProfile"),
      live: tr("sections.live"),
      selectedSymptoms: tr("sections.selectedSymptoms"),
      noSymptoms: tr("sections.noSymptoms"),
      healthTip: tr("sections.healthTip"),
      healthTipDesc: tr("sections.healthTipDesc"),
      disclaimerTitle: tr("sections.disclaimerTitle"),
      disclaimerDesc: tr("sections.disclaimerDesc"),
      hipaa: tr("sections.hipaa"),
      rights: tr("footer.rights", { year }),
      emergencyTitle: tr("emergency.title"),
      emergencyFlags: tr("emergency.flags", { returnObjects: true }),
      symptomLabel: (id) => tr(`symptoms.${id}`)
    };
  }, [lang, tr]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    name: '', age: '', gender: '', weight: '', height: '',
  });
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [customSymptoms, setCustomSymptoms] = useState('');
  const [results, setResults] = useState(null);
  const [, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const bmi = userInfo.weight && userInfo.height 
    ? (parseFloat(userInfo.weight) / ((parseFloat(userInfo.height) / 100) ** 2)).toFixed(1)
    : null;

  const toggleSymptom = useCallback((id) => {
    setSelectedSymptoms(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  }, []);

  const analyzeSymptoms = useCallback(() => {
    setStep(3);
    setTimeout(() => {
      const analysis = generateAnalysis();
      setResults(analysis);
      setStep(4);
    }, 3000);
  }, [selectedSymptoms, lang, customSymptoms]);

  // --- Enhanced handleNext: validation on steps ---
  const handleNext = useCallback(() => {
    // Step 1: profile validation
    if (step === 1) {
      // validation is done in ProfileStep now (we let it control)
      setStep(s => s + 1);
    } else if (step === 2) {
      // validation is done in SymptomsStep now (we let it control)
      analyzeSymptoms();
    } else {
      setStep(s => s + 1);
    }
  }, [step, analyzeSymptoms]);

  const handleBack = useCallback(() => {
    if (step > 1) setStep(s => s - 1);
  }, [step]);

  // -------------------------------
  // --- FIX LOGIC: generateAnalysis ---
  function generateAnalysis() {
    const foods = [];
    const remedies = [];
    const medicines = [];
    const dietPlan = [];
    // Copy selectedSymptoms for mutation/inspection
    let s = selectedSymptoms ? [...selectedSymptoms] : [];
    // Lowercase custom for case-insensitive search
    const custom = (customSymptoms || "").toLowerCase();

    // If user wrote text, try basic keyword matching for supported issues
    // This extends s with found matches from customSymptoms.

    const symptomKeywordMap = [
      // { match: 'keyword', id: 'symptomId' } -- add BN synonyms as needed
      { keyword: ['fever', 'জ্বর'], id: 'fever' },
      { keyword: ['cold', 'ঠান্ডা'], id: 'cold' },
      { keyword: ['cough', 'কাশি'], id: 'cough' },
      { keyword: ['throat', 'গলা'], id: 'soreThroat' },
      { keyword: ['pain', 'ব্যথা'], id: 'bodyPain' },
      { keyword: ['stomach', 'pete', 'পেট'], id: 'stomachPain' },
      { keyword: ['diarrhea', 'পাতলা'], id: 'diarrhea' },
      { keyword: ['vomit', 'বমি'], id: 'vomiting' },
      { keyword: ['indigestion', 'এনডাইজেশন', 'হজম'], id: 'indigestion' },
      { keyword: ['acidity', 'অ্যাসিড', 'gas', 'গ্যাস'], id: 'acidity' },
      { keyword: ['constipation', 'কোষ্ঠকাঠিন্য'], id: 'constipation' },
      { keyword: ['weak', 'দুর্বল'], id: 'weakness' },
      { keyword: ['rash', 'চুলকানি', 'itching'], id: 'rash' },
      { keyword: ['anxiety', 'উদ্বেগ'], id: 'anxiety' },
      { keyword: ['insomnia', 'ঘুম'], id: 'insomnia' },
      { keyword: ['headache', 'মাথা'], id: 'headache' },
      { keyword: ['dizziness', 'ঝিমুনি'], id: 'dizziness' },
      { keyword: ['loss of appetite', 'ক্ষুধা কম'], id: 'lossOfAppetite' },
      { keyword: ['dehydration', 'ডিহাইড্রেশন'], id: 'dehydration' },
    ];

    // Try matching words in the customSymptoms and add mapped id to s (if not already present)
    if (custom) {
      for (const symptom of symptomKeywordMap) {
        for (const word of symptom.keyword) {
          if (
            custom.includes(word) &&
            !s.includes(symptom.id)
          ) {
            s.push(symptom.id);
            break;
          }
        }
      }
    }

    // FEVER, COLD, & CHILLS
    if (s.includes('fever') || s.includes('chills') || s.includes('cold')) {
      foods.push(
        { name: lang === 'bn' ? 'পাতলা খিচুড়ি ও ডিম' : 'Soft Khichuri & Egg', benefit: lang === 'bn' ? 'সহজে হজমযোগ্য শক্তি' : 'Easy to digest energy', icon: Salad },
        { name: lang === 'bn' ? 'লেবুর শরবত' : 'Lemonade', benefit: lang === 'bn' ? 'ভিটামিন সি এবং ইলেকট্রোলাইট' : 'Vitamin C & Electrolytes', icon: Droplets },
        { name: lang === 'bn' ? 'কালোজিরার চা' : 'Black cumin tea', benefit: lang === 'bn' ? 'প্রাকৃতিক রোগপ্রতিরোধ' : 'Natural immunity boost', icon: Coffee },
        { name: lang === 'bn' ? 'টকদই' : 'Yogurt', benefit: lang === 'bn' ? 'সুস্থ ডাইজেশন ও ঠাণ্ডা কমাতে' : 'Helps digestion, soothes temperature', icon: Soup },
        { name: lang === 'bn' ? 'চিকেন ব্রথ' : 'Chicken Broth', benefit: lang === 'bn' ? 'পুষ্টি ও রিকভারি' : 'Nutrition and recovery', icon: Soup },
        { name: lang === 'bn' ? 'কমলার রস' : 'Orange Juice', benefit: lang === 'bn' ? 'ভিটামিন সি ও পানি' : 'Vitamin C and hydration', icon: Citrus },
        { name: lang === 'bn' ? 'সেদ্ধ আলু' : 'Boiled Potatoes', benefit: lang === 'bn' ? 'সহজ হজম ও শক্তি' : 'Easy digestion & energy', icon: Apple }
      );
      remedies.push(
        { name: lang === 'bn' ? 'আদা ও তুলসী চা' : 'Ginger & Tulsi Tea', description: lang === 'bn' ? 'গলা ব্যথা ও ঠান্ডা কমায়' : 'Soothes throat and cold', icon: Wind },
        { name: lang === 'bn' ? 'মাথায় জলপট্টি' : 'Cool Compress', description: lang === 'bn' ? 'শরীরের তাপমাত্রা কমাতে' : 'To lower body temperature', icon: Thermometer },
        { name: lang === 'bn' ? 'গরম পানি দিয়ে গার্গল' : 'Warm Saline Gargle', description: lang === 'bn' ? 'গলা বাড়াতে ও কাশি কমাতে (১ চা চামচ লবণ ১ গ্লাস গরম পানিতে)' : 'Improves throat and soothes cough' },
        { name: lang === 'bn' ? 'বাষ্প নেয়া' : 'Steam inhalation', description: lang === 'bn' ? 'ভিজে কাশি কমাতে' : 'Helps with chest congestion', icon: Wind },
        { name: lang === 'bn' ? 'হালকা ম্যাসাজ' : 'Light massage', description: lang === 'bn' ? 'বডি পেইন কমাতে' : 'Eases body pain', icon: Activity }
      );
      medicines.push(
        { name: lang === 'bn' ? 'প্যারাসিটামল (Napa/Ace)' : 'Paracetamol (Napa/Ace)', description: lang === 'bn' ? 'জ্বর ও ব্যথা নাশক' : 'Fever and pain relief', warning: lang === 'bn' ? '৫০০মিগ্রা, দিনে ৩ বার (ভরা পেটে)' : '500mg, 3 times daily (after food)', icon: Pill },
        { name: lang === 'bn' ? 'এন্টিহিস্টামিন' : 'Antihistamine', description: lang === 'bn' ? 'ঠান্ডা ও নাক বন্ধে সহায়ক' : 'Helps with cold, nasal symptoms', warning: lang === 'bn' ? 'ডাক্তারের পরামর্শে' : 'Doctor recommended', icon: Pill },
        { name: lang === 'bn' ? 'ভিক্স রাব (বাহ্যিক)' : 'Vicks rub (external)', description: lang === 'bn' ? 'শ্বাস প্রশ্বাস সহজ করতে' : 'To ease breathing externally', warning: lang === 'bn' ? 'নাক বা মুখে না লাগানো' : 'Do not apply inside nose/mouth', icon: Pill }
      );
    }

    // COUGH & SORE THROAT
    if (s.includes('cough') || s.includes('soreThroat')) {
      foods.push(
        { name: lang === 'bn' ? 'মধু' : 'Honey', benefit: lang === 'bn' ? 'কাশি ও গলা প্রশমিত করে' : 'Soothes cough and throat', icon: Citrus },
        { name: lang === 'bn' ? 'তুলসী পাতা' : 'Basil/Tulsi leaves', benefit: lang === 'bn' ? 'গলায় আরাম আনে' : 'Eases sore throat', icon: Leaf },
        { name: lang === 'bn' ? 'আদা চা' : 'Ginger tea', benefit: lang === 'bn' ? 'কাশি কমায়' : 'Reduces cough', icon: Coffee },
        { name: lang === 'bn' ? 'গরম পানি' : 'Warm water', benefit: lang === 'bn' ? 'গলা ও কাশি কমায়' : 'Throat soothing & cough relief', icon: Soup }
      );
      remedies.push(
        { name: lang === 'bn' ? 'গরম পানি দিয়ে গার্গল' : 'Warm Water Gargle', description: lang === 'bn' ? 'গলার ব্যথা কমাতে' : 'Reduces sore throat', icon: Soup },
        { name: lang === 'bn' ? 'বাষ্প নেওয়া' : 'Steam Inhalation', description: lang === 'bn' ? 'শ্বাসনালি পরিষ্কার করে' : 'Clears nasal/throat congestion', icon: Wind },
        { name: lang === 'bn' ? 'চেস্ট রাব' : 'Chest rub', description: lang === 'bn' ? 'বুকের কাশিতে সাহায্য করে' : 'Soothes chest congestion', icon: Pill }
      );
      medicines.push(
        { name: lang === 'bn' ? 'ডেকস্ট্রোমেথরফেন' : 'Dextromethorphan', description: lang === 'bn' ? 'কাশির সিরাপ (OTC)' : 'Cough suppressant syrup', warning: lang === 'bn' ? 'নির্দেশ মেনে' : 'Follow dosage', icon: Pill },
        { name: lang === 'bn' ? 'সিট্রিজিন' : 'Cetirizine', description: lang === 'bn' ? 'এলার্জিক কাশি চিকিৎসায়' : 'For allergic cough', warning: lang === 'bn' ? 'রাতে ১টি (প্রয়োজনে)' : 'One at night if needed', icon: Pill }
      );
    }

    // STOMACH/GASTROINTESTINAL
    if (
      s.includes('stomachPain') ||
      s.includes('nausea') ||
      s.includes('indigestion') ||
      s.includes('acidity') ||
      s.includes('vomiting') ||
      s.includes('diarrhea') ||
      s.includes('constipation') ||
      s.includes('acidReflux')
    ) {
      foods.push(
        { name: lang === 'bn' ? 'ডাবের পানি' : 'Coconut Water', benefit: lang === 'bn' ? 'পেট ঠান্ডা রাখে' : 'Cools the stomach', icon: Droplets },
        { name: lang === 'bn' ? 'কাঁচকলা ও পেঁপে' : 'Green Banana & Papaya', benefit: lang === 'bn' ? 'হজম শক্তি বাড়ায়' : 'Aids digestion', icon: Apple },
        { name: lang === 'bn' ? 'ভাত ও মুরগীর স্যুপ' : 'Rice & Chicken Soup', benefit: lang === 'bn' ? 'সহজ ডাইজেশন ও পুষ্টি' : 'Gentle nutrition and easy digestion', icon: Soup },
        { name: lang === 'bn' ? 'তরল খাবার' : 'Clear fluids', benefit: lang === 'bn' ? 'বমি বা ডায়ারিয়ায় শরীরের পানিশক্তি রক্ষা' : 'Maintains hydration in vomiting/diarrhea', icon: Droplets },
        { name: lang === 'bn' ? 'স্যালাইন (ওআরএস) পান' : 'Drink saline (ORS)', benefit: lang === 'bn' ? 'ডিহাইড্রেশন প্রতিরোধে' : 'Prevents dehydration', icon: Droplets },
        { name: lang === 'bn' ? 'পানি ঝরা সেমাই' : 'Boiled semai', benefit: lang === 'bn' ? 'সহজ হজম ও শক্তি' : 'Easily digestible starch', icon: Apple },
        { name: lang === 'bn' ? 'স্যুপ ওয়ালা নুডলস' : 'Soup noodles', benefit: lang === 'bn' ? 'জীর্ণ পেটের খাবার' : 'Easy on stomach', icon: Soup }
      );
      remedies.push(
        { name: lang === 'bn' ? 'মেথি ভেজানো পানি' : 'Fenugreek Water', description: lang === 'bn' ? 'এসিডিটি কমায়' : 'Reduces acidity', icon: Activity },
        { name: lang === 'bn' ? 'ইসবগুলের ভুষি' : 'Psyllium Husk', description: lang === 'bn' ? 'পেট পরিষ্কার রাখে' : 'Keeps stomach clear', icon: Activity },
        { name: lang === 'bn' ? 'প্রোবায়োটিক দই' : 'Probiotic Yogurt', description: lang === 'bn' ? 'অন্ত্রের ভালো ব্যাকটেরিয়া সরবরাহ' : 'Probiotic cultures for gut health', icon: Soup },
        { name: lang === 'bn' ? 'আদা পানি' : 'Ginger water', description: lang === 'bn' ? 'বমি ও বুক জ্বালায় উপকারী' : 'Soothes vomiting & reflux', icon: Coffee }
      );
      if (s.includes('diarrhea') || s.includes('vomiting')) {
        remedies.push(
          { name: lang === 'bn' ? 'ওআরএস (স্যালাইন)' : 'ORS (saline)', description: lang === 'bn' ? 'শরীরের পানিশক্তি পূরণে' : 'Replenishes lost fluids/electrolytes', icon: Droplets },
          { name: lang === 'bn' ? 'পানি বারবার পান' : 'Drink water frequently', description: lang === 'bn' ? 'জলশূন্যতা প্রতিরোধ' : 'Prevent dehydration', icon: Droplets }
        );
        medicines.push(
          { name: lang === 'bn' ? 'ওআরএস (ORS)' : 'ORS (Oral Rehydration Salt)', description: lang === 'bn' ? 'লবণ ও পানির ঘাটতি পূরণ' : 'Saline for dehydration', warning: lang === 'bn' ? 'প্রতিবার পাতলা পায়খানার পর' : 'After each loose motion', icon: Pill },
          { name: lang === 'bn' ? 'জিংক ট্যাবলেট' : 'Zinc tablet', description: lang === 'bn' ? 'ডায়ারিয়ার স্থায়িত্ব কমাতে' : 'Shortens diarrhea duration', warning: lang === 'bn' ? 'ডাক্তারের পরামর্শে' : 'Doctor’s advice', icon: Pill }
        );
      }
      if (s.includes('constipation')) {
        remedies.push(
          { name: lang === 'bn' ? 'টকদই ও ফাইবারযুক্ত খাবার' : 'Yogurt & High-Fiber Foods', description: lang === 'bn' ? 'হজম এবং পেট পরিষ্কার' : 'Improves digestion and bowel movement', icon: LeafyGreen },
          { name: lang === 'bn' ? 'গরম পানি পান' : 'Warm Water Intake', description: lang === 'bn' ? 'কোষ্ঠকাঠিন্য কমায়' : 'Relieves constipation', icon: Soup },
          { name: lang === 'bn' ? 'হালকা ব্যায়াম' : 'Light exercise', description: lang === 'bn' ? 'অন্ত্রের গতি বাড়ায়' : 'Increases bowel motility', icon: Activity }
        );
        medicines.push(
          { name: lang === 'bn' ? 'ল্যাক্সেটিভ সিরাপ' : 'Mild Laxative Syrup', description: lang === 'bn' ? 'প্রয়োজনে ব্যবহৃত' : 'Use if needed, consult doctor', icon: Pill },
          { name: lang === 'bn' ? 'ল্যাকটুলোস সিরাপ' : 'Lactulose syrup', description: lang === 'bn' ? 'কোষ্ঠকাঠিন্য কমাতে' : 'Relieves constipation', warning: lang === 'bn' ? 'সঠিক মাত্রায়' : 'Correct dose', icon: Pill }
        );
      }
      medicines.push(
        { name: lang === 'bn' ? 'এন্টাসিড প্লাস' : 'Antacid Plus', description: lang === 'bn' ? 'গ্যাস ও বুক জ্বালাপোড়া' : 'Gas and heartburn', warning: lang === 'bn' ? 'খাওয়ার ২০ মিনিট পর' : '20 mins after meal', icon: Pill },
        { name: lang === 'bn' ? 'ওমিপ্রাজল (Seclo/Seregel)' : 'Omeprazole (Seclo/Seregel)', description: lang === 'bn' ? 'গ্যাস্ট্রিক আলসার প্রতিরোধ' : 'Gastric protection', warning: lang === 'bn' ? 'খাওয়ার ৩০ মিনিট আগে' : '30 mins before meal', icon: Pill },
        { name: lang === 'bn' ? 'ডমপেরিডন' : 'Domperidone', description: lang === 'bn' ? 'বমিতে ব্যবহৃত' : 'For vomiting relief', warning: lang === 'bn' ? 'ডাক্তারের পরামর্শে' : 'As per doctor', icon: Pill }
      );
    }

    // BODY/BACK PAIN & INFLAMMATION (common selections previously fell through to defaults)
    if (s.includes('bodyPain') || s.includes('backPain') || s.includes('inflammation')) {
      foods.push(
        { name: lang === 'bn' ? 'হলুদ দুধ' : 'Turmeric milk', benefit: lang === 'bn' ? 'প্রদাহ কমাতে সহায়ক' : 'May help with inflammation', icon: Coffee },
        { name: lang === 'bn' ? 'আদা' : 'Ginger', benefit: lang === 'bn' ? 'প্রাকৃতিক প্রদাহনাশক' : 'Natural anti-inflammatory', icon: Leaf },
        { name: lang === 'bn' ? 'ডিম ও ডাল' : 'Eggs & lentils', benefit: lang === 'bn' ? 'রিকভারি ও প্রোটিন' : 'Protein for recovery', icon: Activity }
      );
      remedies.push(
        { name: lang === 'bn' ? 'গরম সেঁক' : 'Warm compress', description: lang === 'bn' ? 'মাংসপেশির ব্যথায় আরাম' : 'Relieves muscle soreness', icon: Flame },
        { name: lang === 'bn' ? 'হালকা স্ট্রেচিং' : 'Gentle stretching', description: lang === 'bn' ? 'পিঠ/শরীর ব্যথায় উপকারী' : 'Helpful for back/body pain', icon: Activity },
        { name: lang === 'bn' ? 'বিশ্রাম' : 'Rest', description: lang === 'bn' ? 'অতিরিক্ত চাপ এড়িয়ে চলুন' : 'Avoid overexertion', icon: Battery }
      );
      medicines.push(
        { name: lang === 'bn' ? 'প্যারাসিটামল' : 'Paracetamol', description: lang === 'bn' ? 'ব্যথা কমাতে (OTC)' : 'Pain relief (OTC)', warning: lang === 'bn' ? 'নির্দেশ অনুযায়ী, ভরা পেটে' : 'Follow label; take after food', icon: Pill }
      );
    }

    // WEAKNESS/FATIGUE
    if (s.includes('weakness') || s.includes('fatigue') || s.includes('dizziness') || s.includes('dehydration')) {
      foods.push(
        { name: lang === 'bn' ? 'খেজুর ও কলা' : 'Dates & Banana', benefit: lang === 'bn' ? 'তাত্ক্ষণিক শক্তি' : 'Instant energy', icon: Zap },
        { name: lang === 'bn' ? 'দুধ ও ডিম' : 'Milk & Egg', benefit: lang === 'bn' ? 'প্রোটিন ও ক্যালসিয়াম' : 'Protein & Calcium', icon: Activity },
        { name: lang === 'bn' ? 'ওটস ও বাদাম' : 'Oats & Nuts', benefit: lang === 'bn' ? 'দীর্ঘস্থায়ী শক্তি' : 'Long-term energy', icon: LeafyGreen },
        { name: lang === 'bn' ? 'আলু পুরি' : 'Potato puri', benefit: lang === 'bn' ? 'শক্তি ও হালকা খাবার' : 'Energizing but light', icon: Apple },
        { name: lang === 'bn' ? 'সুজি হালুয়া' : 'Semolina halwa', benefit: lang === 'bn' ? 'দ্রুত এনার্জি' : 'Quick energy', icon: Citrus }
      );
      remedies.push(
        { name: lang === 'bn' ? '৮ ঘণ্টা ঘুম' : '8 Hours Sleep', description: lang === 'bn' ? 'শারীরিক পুনর্গঠন' : 'Physical recovery', icon: Moon },
        { name: lang === 'bn' ? 'বিশ্রাম' : 'Deep Rest', description: lang === 'bn' ? 'মানসিক প্রশান্তি' : 'Mental peace', icon: Battery },
        { name: lang === 'bn' ? 'লবণ-চিনি পানি' : 'Sugar-salt water', description: lang === 'bn' ? 'ডিহাইড্রেশন এড়াতে' : 'Prevent dehydration', icon: Droplets }
      );
      medicines.push(
        { name: lang === 'bn' ? 'ওআরএস (ORS)' : 'ORS (Oral Rehydration Salt)', description: lang === 'bn' ? 'লবণ ও পানির ঘাটতি পূরণ' : 'Saline for dehydration', warning: lang === 'bn' ? 'প্রতিবার পাতলা পায়খানার পর' : 'After each loose motion', icon: Pill }
      );
    }

    // HEADACHE & MIGRAINE
    if (s.includes('headache')) {
      foods.push(
        { name: lang === 'bn' ? 'নীল চা বা গ্রিন টি' : 'Blue tea or green tea', benefit: lang === 'bn' ? 'রক্ত সঞ্চালন উন্নত করে' : 'Improves blood circulation', icon: Coffee },
        { name: lang === 'bn' ? 'কাঠাল পাতা চা' : 'Jackfruit leaf tea', benefit: lang === 'bn' ? 'প্রাকৃতিক ব্যথা প্রশমন' : 'Natural pain relief', icon: Coffee }
      );
      remedies.push(
        { name: lang === 'bn' ? 'শীতল বাতাস ও বিশ্রাম' : 'Cool Air & Rest', description: lang === 'bn' ? 'মাথা ব্যথা কমায়' : 'Reduces headache', icon: Moon },
        { name: lang === 'bn' ? 'গাঢ় পানীয় এড়িয়ে চলুন' : 'Avoid strong drinks', description: lang === 'bn' ? 'মাইগ্রেন কমাতে' : 'Helpful for migraines', icon: Shield },
        { name: lang === 'bn' ? 'হালকা ম্যাসাজ' : 'Gentle massage', description: lang === 'bn' ? 'রক্তসঞ্চালন উন্নত করে' : 'Improves blood flow', icon: Activity }
      );
      medicines.push(
        { name: lang === 'bn' ? 'প্যারাসিটামল' : 'Paracetamol', description: lang === 'bn' ? 'প্রয়োজনে ব্যবহৃত' : 'Use if needed', warning: lang === 'bn' ? 'নির্দেশ অনুযায়ী' : 'Follow instructions', icon: Pill },
        { name: lang === 'bn' ? 'মাইগ্রেন ট্যাব' : 'Migraine tab', description: lang === 'bn' ? 'ডাক্তারের পরামর্শে মাইগ্রেনের ঔষধ' : 'For migraine (doctor’s advice)', warning: lang === 'bn' ? 'শুধুমাত্র রিকমেন্ডে' : 'On doctor’s recommendation', icon: Pill }
      );
    }

    // RASH/ITCHING/ALLERGY
    if (s.includes('rash') || s.includes('itching') || s.includes('allergy')) {
      foods.push(
        { name: lang === 'bn' ? 'শসা ও করলা' : 'Cucumber & Bitter Gourd', benefit: lang === 'bn' ? 'ত্বক ঠান্ডা রাখে' : 'Cools the body', icon: LeafyGreen },
        { name: lang === 'bn' ? 'আঙুর ও ওয়াটারমেলন' : 'Grapes & Watermelon', benefit: lang === 'bn' ? 'পানির ঘাটতি কমায়' : 'Hydrating fruits', icon: Droplets },
        { name: lang === 'bn' ? 'তরমুজ ও খিরা' : 'Watermelon & Cucumber', benefit: lang === 'bn' ? 'ত্বকের জন্য উপকারী' : 'Good for skin', icon: Apple }
      );
      remedies.push(
        { name: lang === 'bn' ? 'তুলসী পাতা বেটে লাগান' : 'Apply Tulsi Paste', description: lang === 'bn' ? 'ত্বক চুলকানি কমাতে' : 'Reduces skin itching', icon: Leaf },
        { name: lang === 'bn' ? 'ঠান্ডা পানিতে গোসল' : 'Cool Bath', description: lang === 'bn' ? 'ত্বক ঠান্ডা রাখতে' : 'Relieve skin irritation', icon: Droplets },
        { name: lang === 'bn' ? 'শীতল তুলা চেপে দিন' : 'Apply cool cotton', description: lang === 'bn' ? 'স্কিন সুধিং' : 'Soothes skin', icon: Soup }
      );
      medicines.push(
        { name: lang === 'bn' ? 'হিস্টাসিন ট্যাবলেট' : 'Antihistamine tab', description: lang === 'bn' ? 'এলার্জি কমানোর জন্য' : 'Reduces allergy, itching', warning: lang === 'bn' ? 'ডাক্তারের পরামর্শে' : 'Consult doctor', icon: Pill },
        { name: lang === 'bn' ? 'ডার্মা ক্রিম' : 'Dermal Cream', description: lang === 'bn' ? 'ত্বকের জ্বালাপোড়া কমায়' : 'Relieves skin irritation', warning: lang === 'bn' ? 'ত্বকে সাবধানে লাগান' : 'Apply carefully', icon: Pill },
        { name: lang === 'bn' ? 'মোমেটাসন ক্রিম' : 'Mometasone cream', description: lang === 'bn' ? 'শক্তিশালী চুলকানি ও ফুসকুড়িতে' : 'Stronger for itching/rash, consult doctor', warning: lang === 'bn' ? 'কেবলমাত্র ডাক্তারের পরামর্শে' : 'Doctor only', icon: Pill }
      );
    }

    // INSOMNIA/ANXIETY
    if (s.includes('insomnia') || s.includes('anxiety')) {
      foods.push(
        { name: lang === 'bn' ? 'দুধ ও কলা' : 'Milk & Banana', benefit: lang === 'bn' ? 'ঘুমাতে সাহায্য করে' : 'Helps induce sleep', icon: Apple },
        { name: lang === 'bn' ? 'চেরি ও বাদাম' : 'Cherries & Nuts', benefit: lang === 'bn' ? 'মুড উন্নত করে' : 'Improves mood, helps sleep', icon: LeafyGreen },
        { name: lang === 'bn' ? 'ওটমিল' : 'Oatmeal', benefit: lang === 'bn' ? 'স্নায়ু শান্ত রাখে' : 'Soothes nerves, calms body', icon: Salad }
      );
      remedies.push(
        { name: lang === 'bn' ? 'গরম দুধ পান' : 'Warm Milk before Bed', description: lang === 'bn' ? 'ঘুম আনতে সহায়ক' : 'Induces restful sleep', icon: Coffee },
        { name: lang === 'bn' ? 'মেডিটেশন ও গভীর শ্বাস' : 'Meditation & Deep Breathing', description: lang === 'bn' ? 'চিন্তা কমাতে' : 'Reduces anxiety and stress', icon: Brain },
        { name: lang === 'bn' ? 'গান শুনুন' : 'Listen to music', description: lang === 'bn' ? 'মস্তিষ্ককে শান্ত রাখে' : 'Calms mind', icon: Apple }
      );
      medicines.push(
        { name: lang === 'bn' ? 'ডক্সিল ট্যাবলেট' : 'Doxil Tab', description: lang === 'bn' ? 'ডাক্তারের পরামর্শে ঘুমের ওষুধ' : 'Sleeping aid - only per doctor', warning: lang === 'bn' ? 'নিজে থেকে না খান' : 'Take only with prescription', icon: Pill }
      );
    }

    // Loss of Appetite
    if (s.includes('lossOfAppetite')) {
      foods.push(
        { name: lang === 'bn' ? 'আনারস ও পেঁপে' : 'Pineapple & Papaya', benefit: lang === 'bn' ? 'হজম ও ক্ষুধা বাড়ায়' : 'Boosts appetite, aids digestion', icon: Citrus },
        { name: lang === 'bn' ? 'গোলমরিচ ও লেবু' : 'Pepper & Lemon', benefit: lang === 'bn' ? 'রুচি বাড়াতে সহায়ক' : 'Appetite stimulant', icon: Citrus },
        { name: lang === 'bn' ? 'আদা-লেবু পানি' : 'Ginger-lemon water', benefit: lang === 'bn' ? 'রুচি ফেরাতে সাহায্য' : 'Restores taste', icon: Soup }
      );
      remedies.push(
        { name: lang === 'bn' ? 'হালকা হাটাহাটি' : 'Light Walking', description: lang === 'bn' ? 'রুচি বৃদ্ধিতে সহায়ক' : 'Stimulates appetite', icon: Activity },
        { name: lang === 'bn' ? 'রান্নার ঘ্রাণ নিন' : 'Smell fresh food while cooking', description: lang === 'bn' ? 'রুচি জন্মে' : 'May encourage appetite', icon: Salad }
      );
    }

    // Shortness of Breath/Palpitations
    if (s.includes('shortnessOfBreath') || s.includes('palpitations')) {
      remedies.push(
        { name: lang === 'bn' ? 'ছায়ায় বিশ্রাম নিন' : 'Rest in Shade', description: lang === 'bn' ? 'শ্বাসকষ্টের জন্য সাধারণ যত্ন' : 'General rest for breathlessness', icon: Home },
        { name: lang === 'bn' ? 'গভীর শ্বাস প্রশ্বাস অনুশীলন' : 'Deep breathing exercises', description: lang === 'bn' ? 'ফুসফুসের কার্যকারিতা বাড়ায়' : 'Improves lung function', icon: Wind },
        { name: lang === 'bn' ? 'কোল্ড স্পঞ্জ' : 'Cold Sponge', description: lang === 'bn' ? 'শ্বাসকষ্ট বা হার্ট বিট বেশি হলে আরাম দেয়' : 'Soothes if heart rate/breath fast', icon: Droplets }
      );
      foods.push(
        { name: lang === 'bn' ? 'ডাবের পানি' : 'Coconut Water', benefit: lang === 'bn' ? 'হৃদপিণ্ডে ভাল' : 'Good for heart/electrolytes', icon: Droplets }
      );
    }

    // --- FIX: Only use defaults if ALL arrays are still empty after matching above ---
    if (foods.length === 0 && remedies.length === 0 && medicines.length === 0) {
      foods.push({ name: lang === 'bn' ? 'সবুজ শাকসবজি' : 'Green Vegetables', benefit: lang === 'bn' ? 'রোগ প্রতিরোধ ক্ষমতা' : 'Immunity boost', icon: Apple });
      foods.push({ name: lang === 'bn' ? 'ফলমূল' : 'Fruits', benefit: lang === 'bn' ? 'ভিটামিন ও খনিজ সরবরাহ' : 'Provides vitamins & minerals', icon: Citrus });
      foods.push({ name: lang === 'bn' ? 'ডাল ও রুটি' : 'Dal & Roti', benefit: lang === 'bn' ? 'উচ্চ প্রোটিন ও ফাইবার' : 'Protein and fiber', icon: LeafyGreen });
      foods.push({ name: lang === 'bn' ? 'দুধ/দই' : 'Milk/Yogurt', benefit: lang === 'bn' ? 'হাড়ের পুষ্টি' : 'Bone nutrition', icon: Soup });
      remedies.push({ name: lang === 'bn' ? 'নিয়মিত ব্যায়াম' : 'Regular Exercise', description: lang === 'bn' ? 'শরীর ফিট রাখতে' : 'To keep body fit', icon: Activity });
      remedies.push({ name: lang === 'bn' ? 'পর্যাপ্ত ঘুম' : 'Adequate sleep', description: lang === 'bn' ? 'রিজেনারেশন/ছোট অসুখ কমাতে' : 'For recovery', icon: Moon });
      medicines.push({ name: lang === 'bn' ? 'ভিটামিন সি (Ceevit)' : 'Vitamin C (Ceevit)', description: lang === 'bn' ? 'প্রতিদিন ১টি' : 'One daily', warning: lang === 'bn' ? 'খাওয়ার পর চুষে খাবেন' : 'Chewable after meal', icon: Pill });
      medicines.push({ name: lang === 'bn' ? 'মাল্টিভিটামিন' : 'Multivitamin', description: lang === 'bn' ? 'পরিপূর্ণ পুষ্টি' : 'For overall nutrition', warning: '', icon: Pill });
    }

    // EXTENDED: Diet Plan with more variations and customization (leave as before)
    dietPlan.push(
      { 
        meal: lang === 'bn' ? 'সকালের নাস্তা' : 'Breakfast', 
        foods: s.includes('stomachPain')
          ? (lang === 'bn' ? 'চিড়া ও দই' : 'Flattened Rice & Yogurt')
          : s.includes('fever')
            ? (lang === 'bn' ? 'ওটস পোলাও' : 'Oats Pulao')
            : (lang === 'bn' ? 'লাল আটার রুটি ও সবজি' : 'Whole Wheat Roti & Veg'), 
        time: '8:30 AM',
        icon: Sun 
      },
      { 
        meal: lang === 'bn' ? 'দুপুরের খাবার' : 'Lunch', 
        foods: s.includes('fever')
          ? (lang === 'bn' ? 'পাতলা জাউ ভাত ও মাছের ঝোল' : 'Soft Rice & Fish Broth')
          : s.includes('diarrhea')
            ? (lang === 'bn' ? 'খিচুড়ি ও স্যুপ' : 'Khichuri & Soup')
              : s.includes('weakness')
                ? (lang === 'bn' ? 'পালংশাক, ডাল ও ডিম' : 'Spinach, lentils & eggs')
                : (lang === 'bn' ? 'সাদা ভাত, ডাল ও ভর্তা' : 'Rice, Lentils & Bhorta'), 
        time: '1:30 PM', 
        icon: Salad 
      },
      { 
        meal: lang === 'bn' ? 'বিকালের নাস্তা' : 'Afternoon Snack',
        foods: s.includes('lossOfAppetite')
          ? (lang === 'bn' ? 'আনারস ও পেঁপে' : 'Pineapple & Papaya')
            : s.includes('headache')
              ? (lang === 'bn' ? 'লেবুর শরবত' : 'Lemonade')
                : (lang === 'bn' ? 'ফলমূল ও বিস্কুট' : 'Fruit & Biscuits'),
        time: '5:00 PM',
        icon: Apple
      },
      { 
        meal: lang === 'bn' ? 'রাতের খাবার' : 'Dinner', 
        foods: lang === 'bn'
          ? (s.includes('indigestion')
              ? 'হালকা ডালভাত'
              : s.includes('weakness')
                ? 'রুটি ও আলু ভাজি'
                : 'হালকা সবজি স্যুপ বা রুটি'
            )
          : (s.includes('indigestion')
              ? 'Light Dal & Rice'
              : s.includes('weakness')
                ? 'Chapati & Potato stir fry'
                : 'Light Veg Soup or Roti'
            ), 
        time: '8:30 PM', 
        icon: Soup 
      },
      // Night time optional snack
      {
        meal: lang === 'bn' ? 'রাতের হালকা স্ন্যাক' : 'Late Night Snack',
        foods: s.includes('insomnia')
          ? (lang === 'bn' ? 'দুধ ও কলা' : 'Milk & Banana')
          : (lang === 'bn' ? 'অল্প দই' : 'Some Yogurt'),
        time: '10:30 PM',
        icon: Coffee
      }
    );
    return { foods, remedies, medicines, dietPlan };
  }

  function resetApp() {
    setStep(1);
    setUserInfo({ name: '', age: '', gender: '', weight: '', height: '' });
    setSelectedSymptoms([]);
    setCustomSymptoms('');
    setResults(null);
    setErrors({});
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <BackgroundGlow theme={theme} />
      <Header
        t={t}
        lang={lang}
        setLang={(next) => i18n.changeLanguage(next)}
        theme={theme}
        setTheme={setTheme}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero t={t} theme={theme} />
        <StepBar t={t} step={step} theme={theme} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && (
              <ProfileStep
                t={t}
                theme={theme}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                handleNext={handleNext}
              />
            )}
            {step === 2 && (
              <SymptomsStep
                t={t}
                theme={theme}
                selectedSymptoms={selectedSymptoms}
                toggleSymptom={toggleSymptom}
                customSymptoms={customSymptoms}
                setCustomSymptoms={setCustomSymptoms}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            )}
            {step === 3 && <AnalysisStep t={t} />}
            {step === 4 && results && (
              <ResultsStep
                t={t}
                theme={theme}
                results={results}
                userInfo={userInfo}
                setToast={setToast}
                resetApp={resetApp}
              />
            )}
          </div>
          <div className="lg:col-span-1 space-y-6">
            <QuickProfile
              t={t}
              userInfo={userInfo}
              bmi={bmi}
              selectedSymptoms={selectedSymptoms}
              theme={theme}
            />
            <EmergencyCard t={t} theme={theme} />
          </div>
        </div>
      </main>
      <Footer t={t} theme={theme} />
      <Toast toast={toast} />
    </div>
  );
}

export default App